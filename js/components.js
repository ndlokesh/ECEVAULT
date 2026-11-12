/* ── Download Handler ─────────────────────────────────── */
function handleDownload(materialId) {
  const allMats = typeof getAllMaterials === 'function' ? getAllMaterials() : ECE_DATA.materials;
  const material = allMats.find(m => m.id === materialId) || ECE_DATA.materials.find(m => m.id === materialId);
  if (!material) return;
  const subj = getSubject(material.subjectId);

  showToast(`Preparing "${material.title}" for download…`, 'info');

  setTimeout(() => {
    material.downloads = (material.downloads || 0) + 1;

    if (material.dataUrl) {
      const a = document.createElement('a');
      a.href = material.dataUrl;
      a.download = material.fileName || `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`"${material.title}" downloaded successfully!`, 'success');
      return;
    }

    if (material.fileUrl) {
      const a = document.createElement('a');
      a.href = material.fileUrl;
      a.download = material.fileName || `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.${material.format || 'pdf'}`;
      if (material.fileUrl.startsWith('http')) a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`"${material.title}" downloaded successfully!`, 'success');
      return;
    }

    const content = `%PDF-1.4
% ECEVault Academic Resource
Title: ${material.title}
Subject: ${subj ? subj.name : 'ECE'} (${subj ? subj.code : 'EC'})
Semester: ${material.semester}
Format: ${(material.format || 'PDF').toUpperCase()}
Size: ${material.size || '2.5 MB'}
Description: ${material.description || ''}
------------------------------------------------------------
Verified Study Resource provided by ECEVault
Open Academic Portal for Electronics & Communication Engineering
https://ecevault.org
`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`"${material.title}" downloaded successfully!`, 'success');
  }, 400);
}
