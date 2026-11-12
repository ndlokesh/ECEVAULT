const ECE_DATA = {
  semesters: [
    {
      id: 1,
      label: 'Semester 1',
      subjects: [
        { id: 's1-math1', name: 'Engineering Mathematics I', code: 'MA101', units: 5 },
        { id: 's1-physics', name: 'Engineering Physics', code: 'PH101', units: 5 },
        { id: 's1-chemistry', name: 'Engineering Chemistry', code: 'CH101', units: 5 },
        { id: 's1-bee', name: 'Basic Electrical Engineering', code: 'EE101', units: 5 },
        { id: 's1-programming', name: 'Programming in C', code: 'CS101', units: 5 },
        { id: 's1-english', name: 'Communicative English', code: 'EN101', units: 4 },
        { id: 's1-workshop', name: 'Engineering Workshop', code: 'ME101', units: 2 },
      ]
    },
    {
      id: 2,
      label: 'Semester 2',
      subjects: [
        { id: 's2-math2', name: 'Engineering Mathematics II', code: 'MA201', units: 5 },
        { id: 's2-edcs', name: 'Electronic Devices & Circuits', code: 'EC201', units: 5 },
        { id: 's2-dcs', name: 'Digital Circuit Systems', code: 'EC202', units: 5 },
        { id: 's2-nw', name: 'Network Analysis', code: 'EC203', units: 5 },
        { id: 's2-egd', name: 'Engineering Graphics & Design', code: 'ME201', units: 4 },
        { id: 's2-env', name: 'Environmental Science', code: 'HS201', units: 3 },
      ]
    },
    {
      id: 3,
      label: 'Semester 3',
      subjects: [
        { id: 's3-math3', name: 'Engineering Mathematics III', code: 'MA301', units: 5 },
        { id: 's3-signals', name: 'Signals & Systems', code: 'EC301', units: 5 },
        { id: 's3-analog', name: 'Analog Circuits', code: 'EC302', units: 5 },
        { id: 's3-edclab', name: 'Electronic Devices Lab', code: 'EC303', units: 2 },
        { id: 's3-datastruc', name: 'Data Structures', code: 'CS301', units: 4 },
        { id: 's3-emft', name: 'Electromagnetic Field Theory', code: 'EC304', units: 5 },
      ]
    },
    {
      id: 4,
      label: 'Semester 4',
      subjects: [
        { id: 's4-math4', name: 'Probability & Statistics', code: 'MA401', units: 5 },
        { id: 's4-micro', name: 'Microprocessors & Microcontrollers', code: 'EC401', units: 5 },
        { id: 's4-commsys', name: 'Communication Systems', code: 'EC402', units: 5 },
        { id: 's4-lica', name: 'Linear Integrated Circuits', code: 'EC403', units: 5 },
        { id: 's4-control', name: 'Control Systems', code: 'EC404', units: 5 },
        { id: 's4-analoglab', name: 'Analog Circuits Lab', code: 'EC405', units: 2 },
      ]
    },
    {
      id: 5,
      label: 'Semester 5',
      subjects: [
        { id: 's5-dsp', name: 'Digital Signal Processing', code: 'EC501', units: 5 },
        { id: 's5-vlsi', name: 'VLSI Design', code: 'EC502', units: 5 },
        { id: 's5-dc', name: 'Digital Communication', code: 'EC503', units: 5 },
        { id: 's5-ant', name: 'Antennas & Wave Propagation', code: 'EC504', units: 5 },
        { id: 's5-microlab', name: 'Microprocessor Lab', code: 'EC505', units: 2 },
        { id: 's5-elective1', name: 'Professional Elective I', code: 'PE501', units: 4 },
      ]
    },
    {
      id: 6,
      label: 'Semester 6',
      subjects: [
        { id: 's6-embed', name: 'Embedded Systems', code: 'EC601', units: 5 },
        { id: 's6-cn', name: 'Computer Networks', code: 'EC602', units: 5 },
        { id: 's6-radar', name: 'Radar & Satellite Communication', code: 'EC603', units: 5 },
        { id: 's6-optic', name: 'Optical Communication', code: 'EC604', units: 5 },
        { id: 's6-dsplab', name: 'DSP Lab', code: 'EC605', units: 2 },
        { id: 's6-elective2', name: 'Professional Elective II', code: 'PE601', units: 4 },
      ]
    },
    {
      id: 7,
      label: 'Semester 7',
      subjects: [
        { id: 's7-tic', name: 'Information & Coding Theory', code: 'EC701', units: 5 },
        { id: 's7-wire', name: 'Wireless Communication', code: 'EC702', units: 5 },
        { id: 's7-iot', name: 'Internet of Things', code: 'EC703', units: 4 },
        { id: 's7-elective3', name: 'Professional Elective III', code: 'PE701', units: 4 },
        { id: 's7-project1', name: 'Project Phase I', code: 'EC704', units: 4 },
      ]
    },
    {
      id: 8,
      label: 'Semester 8',
      subjects: [
        { id: 's8-elective4', name: 'Professional Elective IV', code: 'PE801', units: 4 },
        { id: 's8-elective5', name: 'Open Elective', code: 'OE801', units: 4 },
        { id: 's8-project2', name: 'Project Phase II', code: 'EC801', units: 10 },
        { id: 's8-intern', name: 'Internship / Industrial Training', code: 'EC802', units: 4 },
      ]
    }
  ],
  materials: [
    { id: 'm001', title: 'Engineering Mathematics I – Complete Notes', subjectId: 's1-math1', semester: 1, type: 'notes', unit: 'all', format: 'pdf', size: '4.2 MB', downloads: 1240, featured: true, description: 'Comprehensive notes covering differential calculus, integral calculus, and series convergence.' },
    { id: 'm002', title: 'Engineering Physics – Unit 1: Optics', subjectId: 's1-physics', semester: 1, type: 'notes', unit: 1, format: 'pdf', size: '2.1 MB', downloads: 890, featured: false, description: 'Detailed notes on wave optics, interference, diffraction, and polarization.' },
    { id: 'm003', title: 'Programming in C – Lab Manual', subjectId: 's1-programming', semester: 1, type: 'lab', unit: 'all', format: 'pdf', size: '3.5 MB', downloads: 1100, featured: true, description: 'Complete lab manual with 15 experiments, code samples, and viva questions.' },
    { id: 'm004', title: 'BEE Previous Year Papers (2019–2024)', subjectId: 's1-bee', semester: 1, type: 'paper', unit: 'all', format: 'pdf', size: '8.4 MB', downloads: 2100, featured: true, description: 'Collection of university question papers for Basic Electrical Engineering.' },
    { id: 'm005', title: 'Electronic Devices & Circuits – Full Notes', subjectId: 's2-edcs', semester: 2, type: 'notes', unit: 'all', format: 'pdf', size: '5.3 MB', downloads: 1580, featured: true, description: 'BJT, FET, MOSFET characteristics, biasing, and amplifier design.' },
    { id: 'm006', title: 'Digital Circuit Systems – Unit 3: Combinational Logic', subjectId: 's2-dcs', semester: 2, type: 'notes', unit: 3, format: 'pdf', size: '1.8 MB', downloads: 720, featured: false, description: 'Multiplexers, demultiplexers, encoders, decoders, and arithmetic circuits.' },
    { id: 'm007', title: 'Network Analysis – Previous Papers', subjectId: 's2-nw', semester: 2, type: 'paper', unit: 'all', format: 'pdf', size: '6.1 MB', downloads: 980, featured: false, description: 'Five years of university question papers with solutions.' },
    { id: 'm008', title: 'Signals & Systems – Complete Notes', subjectId: 's3-signals', semester: 3, type: 'notes', unit: 'all', format: 'pdf', size: '6.7 MB', downloads: 1820, featured: true, description: 'Covers continuous-time and discrete-time signals, Fourier series, Laplace and Z-transforms.' },
    { id: 'm009', title: 'Analog Circuits – Unit 2: Amplifiers', subjectId: 's3-analog', semester: 3, type: 'notes', unit: 2, format: 'pdf', size: '2.4 MB', downloads: 650, featured: false, description: 'CE, CB, CC amplifier configurations, frequency response, and multistage amplifiers.' },
    { id: 'm010', title: 'Electronic Devices Lab Manual', subjectId: 's3-edclab', semester: 3, type: 'lab', unit: 'all', format: 'pdf', size: '4.0 MB', downloads: 1300, featured: false, description: 'Lab experiments with circuit diagrams, procedures, and expected outputs.' },
    { id: 'm011', title: 'Microprocessors – 8085/8086 Notes', subjectId: 's4-micro', semester: 4, type: 'notes', unit: 'all', format: 'pdf', size: '7.2 MB', downloads: 2200, featured: true, description: 'Architecture, instruction set, programming, and interfacing of 8085/8086.' },
    { id: 'm012', title: 'Communication Systems – Full Notes', subjectId: 's4-commsys', semester: 4, type: 'notes', unit: 'all', format: 'pdf', size: '5.8 MB', downloads: 1450, featured: true, description: 'AM, FM, PM modulation techniques, noise analysis, and receiver design.' },
    { id: 'm013', title: 'Control Systems – Previous Papers', subjectId: 's4-control', semester: 4, type: 'paper', unit: 'all', format: 'pdf', size: '4.6 MB', downloads: 1100, featured: false, description: 'University question papers covering Bode plots, root locus, and Nyquist criteria.' },
    { id: 'm014', title: 'DSP – Complete Notes with MATLAB Examples', subjectId: 's5-dsp', semester: 5, type: 'notes', unit: 'all', format: 'pdf', size: '8.1 MB', downloads: 1960, featured: true, description: 'DFT, FFT, FIR/IIR filter design, and MATLAB code examples.' },
    { id: 'm015', title: 'VLSI Design – Notes & Diagrams', subjectId: 's5-vlsi', semester: 5, type: 'notes', unit: 'all', format: 'pdf', size: '6.3 MB', downloads: 1340, featured: false, description: 'MOS transistor theory, CMOS logic design, stick diagrams, and layout rules.' },
    { id: 'm016', title: 'Digital Communication – Unit 1: Source Coding', subjectId: 's5-dc', semester: 5, type: 'notes', unit: 1, format: 'pdf', size: '1.9 MB', downloads: 780, featured: false, description: 'Information theory, entropy, Huffman coding, and Shannon\'s theorem.' },
    { id: 'm017', title: 'Embedded Systems – ARM Processor Notes', subjectId: 's6-embed', semester: 6, type: 'notes', unit: 'all', format: 'pdf', size: '5.5 MB', downloads: 1680, featured: true, description: 'ARM architecture, RTOS concepts, interfacing, and embedded C programming.' },
    { id: 'm018', title: 'Computer Networks – OSI & TCP/IP', subjectId: 's6-cn', semester: 6, type: 'notes', unit: 'all', format: 'pdf', size: '4.9 MB', downloads: 1230, featured: false, description: 'Network models, protocols, routing algorithms, and security fundamentals.' },
    { id: 'm019', title: 'DSP Lab Manual', subjectId: 's6-dsplab', semester: 6, type: 'lab', unit: 'all', format: 'pdf', size: '3.2 MB', downloads: 890, featured: false, description: 'MATLAB-based experiments for filter design, FFT, and convolution.' },
    { id: 'm020', title: 'Wireless Communication – Full Notes', subjectId: 's7-wire', semester: 7, type: 'notes', unit: 'all', format: 'pdf', size: '5.1 MB', downloads: 1120, featured: true, description: 'Cellular concepts, multiple access techniques, OFDM, and 4G/5G overview.' },
    { id: 'm021', title: 'IoT – Architectures & Protocols', subjectId: 's7-iot', semester: 7, type: 'notes', unit: 'all', format: 'pdf', size: '3.8 MB', downloads: 940, featured: false, description: 'IoT architecture, MQTT, CoAP, sensor interfacing, and cloud integration.' },
    { id: 'm022', title: 'Project Report Template', subjectId: 's8-project2', semester: 8, type: 'notes', unit: 'all', format: 'pdf', size: '1.2 MB', downloads: 1560, featured: false, description: 'University-approved project report format with sample content.' },
  ]
};

function getSemester(semNum) {
  return ECE_DATA.semesters.find(s => s.id === semNum);
}

function getSubject(subjectId) {
  for (const sem of ECE_DATA.semesters) {
    const subj = sem.subjects.find(s => s.id === subjectId);
    if (subj) return { ...subj, semester: sem.id, semesterLabel: sem.label };
  }
  return null;
}

function getMaterials(filters = {}) {
  let results = [...ECE_DATA.materials];
  if (filters.semester) results = results.filter(m => m.semester === Number(filters.semester));
  if (filters.subjectId) results = results.filter(m => m.subjectId === filters.subjectId);
  if (filters.type) results = results.filter(m => m.type === filters.type);
  if (filters.unit && filters.unit !== 'all') results = results.filter(m => m.unit === filters.unit || m.unit === 'all');
  if (filters.format) results = results.filter(m => m.format === filters.format);
  if (filters.featured) results = results.filter(m => m.featured);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    results = results.filter(m => {
      const subj = getSubject(m.subjectId);
      return m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q) || (subj && subj.name.toLowerCase().includes(q));
    });
  }
  if (filters.sort === 'name') results.sort((a, b) => a.title.localeCompare(b.title));
  else results.sort((a, b) => b.downloads - a.downloads);
  return results;
}

function getTypeLabel(type) {
  const labels = { notes: 'Notes', paper: 'Question Paper', lab: 'Lab Manual', syllabus: 'Syllabus' };
  return labels[type] || type;
}

function getTypeIcon(type) {
  const icons = {
    notes: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    paper: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    lab: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    syllabus: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>'
  };
  return icons[type] || icons.notes;
}

function getTypeColor(type) {
  const colors = { notes: 'blue', paper: 'cyan', lab: 'violet', syllabus: 'green' };
  return colors[type] || 'blue';
}

function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
