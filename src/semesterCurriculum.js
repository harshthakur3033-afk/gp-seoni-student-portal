import {
  CalendarDays, Code2, Network, LayoutDashboard, ShieldCheck, Image as ImageIcon,
  Wifi, Database, Sun, Calculator, Globe, Monitor, Smartphone, Search,
  ClipboardCheck, Terminal, AlertTriangle, Briefcase, BrainCircuit, BookOpen,
  FileText, Cpu, Lightbulb, Landmark, Radio, Layers, Users, GraduationCap, Target
} from 'lucide-react';

const U = (title, titleHi, outline) => ({ label: title, title, titleHi, outline });

const C = (data) => ({
  ...data,
  topics: data.units.map((unit) => unit.title),
  topicsHi: data.units.map((unit) => unit.titleHi || unit.title),
  syllabusUnits: data.units
});

const semesterSubjects = [
  // ------------------------------ SEMESTER IV ------------------------------
  C({
    semester: 4, name: 'Operating Systems', nameHi: 'ऑपरेटिंग सिस्टम', code: '401',
    officialCode: '401', paperCode: '7486', icon: Monitor, tag: 'Core + Lab',
    credits: '4 theory + 1 practical', group: 'Core',
    units: [
      U('Unit 1: OS overview and UNIX/Linux architecture', 'इकाई 1: OS का परिचय और UNIX/Linux आर्किटेक्चर',
        'Operating System overview; basic concepts; UNIX/Linux architecture; Kernel, services and system calls; system programs.'),
      U('Unit 2: Process and memory management', 'इकाई 2: Process और memory management',
        'Process concepts and operations; inter-process communication (IPC); process scheduling; multithreaded programming; memory allocation; swapping; paging; segmentation; virtual memory and related faults.'),
      U('Unit 3: File management', 'इकाई 3: File management',
        'File concepts and access methods; directory structure; file-system mounting, sharing and protection; file-system structure and implementation; directory implementation; free-space management; efficiency, performance and types of file systems.'),
      U('Unit 4: I/O system and mass storage', 'इकाई 4: I/O system और mass storage',
        'Mass-storage overview; disk structure and attachment; disk-scheduling algorithms; swap-space management; RAID types.'),
      U('Unit 5: OS security', 'इकाई 5: OS security',
        'Authentication; access control; access rights; system logs.')
    ],
    practicals: [
      'Revise UNIX/Linux commands: man, cp, mv, ln, rm, unlink, mkdir and rmdir.',
      'Implement two-way process communication using pipes.',
      'Implement message queues, shared memory and semaphores for IPC.',
      'Simulate FCFS, SJF, Round Robin and priority CPU scheduling.',
      'Simulate Banker’s algorithm for deadlock avoidance/prevention.',
      'Simulate FIFO and LRU page-replacement algorithms in C.',
      'Simulate paging-based memory management.',
      'Practice utilities including cat, nl, uniq, tee, pg, comm, cmp, diff, tr, tar, cpio, mount, umount, find, umask, ulimit, sort, grep, cut, paste, join, du, df, ps and who.'
    ]
  }),
  C({
    semester: 4, name: 'Introduction to DBMS', nameHi: 'DBMS का परिचय', code: '402',
    officialCode: '402', paperCode: '7487', icon: Database, tag: 'Core + Lab',
    credits: '3 theory + 1 practical', group: 'Core',
    units: [
      U('Unit 1: Introduction and database-system architecture', 'इकाई 1: परिचय और database-system architecture',
        'Introduction; database-system concepts; database-system architecture.'),
      U('Unit 2: ER and EER data modelling', 'इकाई 2: ER और EER data modelling',
        'Data modelling using the Entity–Relationship (ER) model; Enhanced Entity–Relationship (EER) model.'),
      U('Unit 3: Relational data model and constraints', 'इकाई 3: Relational data model और constraints',
        'Relational data model and relational database constraints; ER/EER-to-relational-model mapping; relational algebra and relational calculus.'),
      U('Unit 4: SQL-99 and database programming', 'इकाई 4: SQL-99 और database programming',
        'SQL-99 schema definition, constraints, queries and views; security; introduction to SQL programming techniques.'),
      U('Unit 5: Dependencies and normalization', 'इकाई 5: Dependencies और normalization',
        'Functional dependencies and normalization for relational databases; relational database-design algorithms and further dependencies.')
    ],
    practicals: [
      'Employee database case study: create tables, query employees, remove duplicates, insert/update/delete records, use triggers and calculate net salary.',
      'Visitor Management database case study.',
      'Students Academic database case study.',
      'Inventory Management System database case study.',
      'Bank Operations database case study.',
      'Bus Operator/Roadways database: ER model, relational model, normalization, tables, queries and stored procedures.'
    ]
  }),
  C({
    semester: 4, name: 'Computer Networks', nameHi: 'कंप्यूटर नेटवर्क', code: '403',
    officialCode: '403', paperCode: '7488', icon: Wifi, tag: 'Core + Lab',
    credits: '3 theory + 2 practical', group: 'Core',
    units: [
      U('Unit 1: Network introduction and models', 'इकाई 1: Network का परिचय और models',
        'Introduction to computer networks; OSI Reference Model; TCP/IP Model.'),
      U('Unit 2: Transmission media, topologies and data link layer', 'इकाई 2: Transmission media, topologies और data link layer',
        'Transmission-media principles, issues and examples; coaxial, UTP, STP and fibre-optic cables; wireless media including HF, VHF, UHF, microwave and Ku Band; network topologies; Data Link Layer design issues; Ethernet, WLAN and Bluetooth; switching techniques.'),
      U('Unit 3: Network layer and routing', 'इकाई 3: Network layer और routing',
        'Network Layer design issues; IPv4; routing principles and issues; distance-vector and link-state algorithms; RIP and OSPF protocols.'),
      U('Unit 4: Transport and application-layer protocols', 'इकाई 4: Transport और application-layer protocols',
        'Transport Layer design issues and TCP; application-layer protocols SMTP and DNS.'),
      U('Unit 5: Network devices and management', 'इकाई 5: Network devices और management',
        'NIC, hub, switch, router and Wi-Fi devices; Network Management System; SNMP protocol.')
    ],
    practicals: [
      'Identify networking cables and connectors and compare published specifications.',
      'Make patch cords; practise crimping/splicing and test cables using cable testers.',
      'Configure PCs, laptops and phones for IP address, gateway, DNS and security settings.',
      'Identify NICs, hubs, switches, routers and Wi-Fi access points.',
      'Use a network simulation tool such as Cisco Packet Tracer.',
      'Set up a small wired LAN and a small wireless LAN.'
    ]
  }),
  C({
    semester: 4, name: 'SSAD / Software Engineering', nameHi: 'SSAD / सॉफ्टवेयर इंजीनियरिंग',
    code: '404', officialCode: '404', paperCode: '7489', icon: Layers,
    tag: 'Core', credits: '4 theory', group: 'Core',
    units: [
      U('Unit 1: Software engineering and process models', 'इकाई 1: Software engineering और process models',
        'Introduction to Software Engineering; software life cycle; traditional versus Agile process models.'),
      U('Unit 2: Software development activities', 'इकाई 2: Software development activities',
        'Requirements gathering and analysis; design concepts; software architecture and architectural styles; basic UI design; effective coding and debugging techniques.'),
      U('Unit 3: Software testing and quality assurance', 'इकाई 3: Software testing और quality assurance',
        'Software-testing basics; unit, integration, system and acceptance testing; introduction to testing techniques such as stress testing; writing and executing test cases; Quality Assurance.'),
      U('Unit 4: Project and release management', 'इकाई 4: Project और release management',
        'Project-management concepts; configuration and release management; version control and tools such as Git; release planning; change management; software maintenance; project metrics.')
    ],
    sourceNote: 'The uploaded PDF specifies four units for SSAD / Software Engineering; no Unit 5 is listed.'
  }),
  C({
    semester: 4, name: 'Web Technologies', nameHi: 'वेब टेक्नोलॉजीज', code: '405',
    officialCode: '405', paperCode: '7490', icon: Globe, tag: 'Core + Lab',
    credits: '3 theory + 2 practical', group: 'Core',
    units: [
      U('Unit 1: WWW introduction and web design', 'इकाई 1: WWW का परिचय और web design',
        'Protocols and programs; secure connections; applications and development tools; browser and server concepts; setting up UNIX/Linux web servers; logging users; dynamic IP; website-design principles, planning, and navigation.'),
      U('Unit 2: Web-systems architecture', 'इकाई 2: Web-systems architecture',
        'Client/server two-tier and three-tier architectures; fast and scalable data-access building blocks: caches, proxies, indexes, load balancers and queues; Web Application Architecture (WAA).'),
      U('Unit 3: JavaScript basics', 'इकाई 3: JavaScript की मूल बातें',
        'Client-side scripting; JavaScript introduction; simple JavaScript; variables, functions, conditions, loops and repetition.'),
      U('Unit 4: Advanced scripting and web formats', 'इकाई 4: Advanced scripting और web formats',
        'JavaScript objects and browser objects; DOM and browser environments; forms and validation; DHTML using HTML, CSS and JavaScript; events and buttons; AJAX, its advantages/disadvantages and alternatives; XML, XSL, XSLT, DTDs, schemas and web services.'),
      U('Unit 5: PHP and databases', 'इकाई 5: PHP और databases',
        'Server-side scripting; arrays, functions and forms; advanced PHP; connecting to a server; creating/selecting/listing databases and tables; inserting data, altering tables and queries; deleting databases, data and tables; phpMyAdmin and database bugs.')
    ],
    practicals: [
      'Code client/server programs.',
      'Develop web applications using HTML and JavaScript.',
      'Develop advanced web applications using CSS.',
      'Practise PHP basics and PHP web-application development.',
      'Build tiered applications using PHP and MySQL.',
      'Develop a functional web-service application using the technologies learned.'
    ]
  }),
  C({
    semester: 4, name: 'Minor Project', nameHi: 'माइनर प्रोजेक्ट',
    code: 'IV-MINOR', officialCode: '—', paperCode: '—', icon: Briefcase,
    tag: 'Project', credits: '2 practical credits', group: 'Project',
    units: [
      U('Project work and implementation', 'प्रोजेक्ट कार्य और implementation',
        'The PDF specifies evaluation based on work done, quality of the report, performance in viva-voce and presentation.')
    ],
    sourceNote: 'The PDF does not define numbered units for the Minor Project.'
  }),
  C({
    semester: 4, name: 'Essence of Indian Knowledge and Tradition',
    nameHi: 'भारतीय ज्ञान और परंपरा का सार', code: 'IV-IKT', officialCode: '—',
    paperCode: '—', icon: Landmark, tag: 'Additional course',
    credits: 'No marks/credits shown in the scheme table', group: 'Additional course',
    units: [
      U('Course topics: Indian Knowledge System', 'पाठ्यक्रम विषय: भारतीय ज्ञान प्रणाली',
        'Basic structure of the Indian Knowledge System (the PDF scan contains garbled terms in this part); Modern Science and Indian Knowledge System; Yoga and holistic healthcare; case studies.')
    ],
    sourceNote: 'Some terminology in this course section is garbled in the uploaded PDF text, so this entry retains only clearly readable topics.'
  }),

  // ------------------------------ SEMESTER V -------------------------------
  C({
    semester: 5, name: 'Introduction to e-Governance', nameHi: 'ई-गवर्नेंस का परिचय',
    code: '501', officialCode: '501', paperCode: '7491', icon: Globe,
    tag: 'Core', credits: '6 theory credits', group: 'Core',
    units: [
      U('Unit 1: E-Governance and ICT4D', 'इकाई 1: E-Governance और ICT4D',
        'E-Governance introduction, framework and objectives; ICT for Development (ICT4D) and key technologies AI, ML, IoT, cloud computing and m-Governance; stages, challenges, benefits and stakeholders; e-Governance lifecycle; project design, implementation, monitoring and evaluation; policy, legal and ethical considerations.'),
      U('Unit 2: GPR, NeGP and SMART Governance', 'इकाई 2: GPR, NeGP और SMART Governance',
        'Government Process Re-engineering (GPR): definition, need and steps; National e-Governance Plan (NeGP) for India: vision, mission, need and key components; SMART Governance: definition, elements and thumb rules.'),
      U('Unit 3: Architecture, change management and issues', 'इकाई 3: Architecture, change management और समस्याएँ',
        'Technical, application, data, security and governance components; centralized/decentralized and integrated/federated models; G2B, G2C, G2G and G2E; PPP models BOT, BOOT and BOLT; e-Governance innovation; change management; critical success factors, corruption, resistance to change, e-security and cyber laws.'),
      U('Unit 4: Citizen-centric e-Governance in India', 'इकाई 4: भारत में citizen-centric e-Governance',
        'Digital India initiatives, challenges, impact assessment and future directions; best practices in Indian e-Governance projects; case studies of CSC, e-Sewa, Post Office and Passport Seva.'),
      U('Unit 5: Mini-project evaluation of e-Governance portals', 'इकाई 5: e-Governance portals का mini-project evaluation',
        'Form student groups; select a local portal such as MP e-District, MP e-Services, MP-Online, MP State Scholarship or a university/institution portal; study strengths and limitations; evaluate parameters, stakeholder feedback and improvement potential; prepare report, presentation and group discussion.')
    ]
  }),
  C({
    semester: 5, name: 'Internet of Things', nameHi: 'इंटरनेट ऑफ थिंग्स (IoT)',
    code: '502', officialCode: '502', paperCode: '7492', icon: Radio,
    tag: 'Core', credits: '5 theory credits', group: 'Core',
    units: [
      U('Unit 1: Fundamentals of IoT', 'इकाई 1: IoT की मूल बातें',
        'IoT definition, characteristics, applications and five-layer architecture (perception, network, middleware, application and business); IoT challenges; devices, sensor and actuator types; Arduino and Raspberry Pi controllers; IoT evolution and enabling technologies; M2M communication; IoT versus M2M versus WSN.'),
      U('Unit 2: IoT networking and protocols', 'इकाई 2: IoT networking और protocols',
        'Devices/nodes, gateways, network infrastructure and cloud/backend server; short- and long-range IoT networks; Wi-Fi, Bluetooth, Zigbee, LoRaWAN, RFID and NFC; wireless/mobile wireless sensor networks and UAV networks; IPv6, 6LoWPAN, HART/wireless HART, MQTT, CoAP and AMQP.'),
      U('Unit 3: Arduino programming', 'इकाई 3: Arduino programming',
        'Arduino boards, IDE, libraries and sketches; upload and structure using setup() and loop(); data types and variables; digitalRead, digitalWrite, analogRead and analogWrite; conditions, loops and serial communication; LED/buzzer examples; sensors and actuators including DHT, sound, accelerometer, servo, relay and GSM; PCB simulation using Fritzing or Tinkercad.'),
      U('Unit 4: Raspberry Pi and cloud-enabled IoT', 'इकाई 4: Raspberry Pi और cloud-enabled IoT',
        'Raspberry Pi models/specifications, architecture, GPIO and setup; OS configuration; UART and Arduino interfacing; USB/Bluetooth devices; camera, image/video capture, motion detection, time-lapse and surveillance; cloud IoT architecture/platforms, ThingSpeak/Blynk, Mosquitto MQTT broker, publishing sensor data using MQTT; edge versus cloud computing.'),
      U('Unit 5: IoT security, privacy and case studies', 'इकाई 5: IoT security, privacy और case studies',
        'Authentication, encryption, secure communication and privacy concerns; Arduino case studies in agriculture and healthcare; Raspberry Pi case studies in activity monitoring.')
    ]
  }),
  C({
    semester: 5, name: 'Information Security', nameHi: 'इन्फॉर्मेशन सिक्योरिटी',
    code: '511', officialCode: '511', paperCode: '7493', icon: ShieldCheck,
    tag: 'OR elective A', electiveGroup: 'A', credits: '3 theory + 2 practical',
    group: 'Elective A — the scheme lists Information Security OR Multimedia Technologies',
    units: [
      U('Unit 1: Information-security basics', 'इकाई 1: Information security की मूल बातें',
        'Need and types of security; security principles; CIA triad (confidentiality, integrity and authentication as written in this syllabus); threat, vulnerability, risk, active and passive attacks; OS authentication, logs, audit features, file-system protection and user privileges; antivirus software.'),
      U('Unit 2: Security in networking protocols', 'इकाई 2: Networking protocols की security',
        'Security weaknesses in IP, TCP, UDP, RIP, OSPF, HTTP and SMTP; weaknesses in hubs, switches, routers and Wi-Fi; mitigation using IPSec, HTTPS, VLAN and VPN.'),
      U('Unit 3: Fundamentals of cryptography', 'इकाई 3: Cryptography की मूल बातें',
        'Symmetric and asymmetric-key encryption; PKI; substitution ciphers (Caesar, monoalphabetic, Playfair, polyalphabetic); transposition ciphers (Rail Fence and columnar); DES, RSA, Diffie–Hellman key exchange and steganography.'),
      U('Unit 4: Network-security products', 'इकाई 4: Network-security products',
        'Firewalls: introduction, types, need, functions and user management; IDS; VPN and VPN concentrator; content-screening gateways.'),
      U('Unit 5: Security standards and continuity planning', 'इकाई 5: Security standards और continuity planning',
        'ISO 27001; Indian IT Act; IPR laws; security-audit procedures; contingency planning, incident response, disaster recovery and Business Continuity Planning (BCP).')
    ],
    practicals: [
      'Install and use antivirus software.',
      'Encrypt/decrypt a message using C, Python or PHP and a cryptology tool such as CrypTool.',
      'Implement Caesar cipher and practise steganography using an appropriate lab tool.',
      'Identify and test browser cookies.',
      'Explore a DES implementation in an educational lab environment.',
      'Configure firewall rules including inbound/outbound rules.',
      'Study cyber-safety/reporting information on the National Cyber Crime Portal.'
    ]
  }),
  C({
    semester: 5, name: 'Multimedia Technologies', nameHi: 'मल्टीमीडिया टेक्नोलॉजीज',
    code: '512', officialCode: '512', paperCode: '7494', icon: ImageIcon,
    tag: 'OR elective A', electiveGroup: 'A', credits: '3 theory + 2 practical',
    group: 'Elective A — the scheme lists Information Security OR Multimedia Technologies',
    units: [
      U('Unit 1: Multimedia foundation and concepts', 'इकाई 1: Multimedia foundation और concepts',
        'Multimedia hardware/software; authoring and tools; hypertext and hypermedia; text, images, audio, video and animation; multimedia OS characteristics versus traditional OS, including process and disk scheduling and file systems; multimedia communication systems.'),
      U('Unit 2: Basic compression techniques', 'इकाई 2: Basic compression techniques',
        'Lossy video/audio compression; transform coding and Discrete Cosine Transform (DCT); lossless sound/text compression including Run Length Encoding, dictionary encoding and Huffman coding; lossy versus lossless compression.'),
      U('Unit 3: Content development and distribution', 'इकाई 3: Content development और distribution',
        'Animation principles, characteristics, applications and limitations; traditional, 2D, 3D, motion-graphics and stop-motion animation; key framing, frame-by-frame animation, stage and timeline; introduction to Blender and its work environment.'),
      U('Unit 4: Digital imaging and computer graphics', 'इकाई 4: Digital imaging और computer graphics',
        'Definition and applications of computer graphics; graphic design and digital technology; digital images; pixels, resolution, bit depth and RGB/CMY colour models; comparison of GIF, JPEG, PNG, TIFF, MPEG and GIMP as listed in the PDF.'),
      U('Unit 5: Multimedia programming and applications', 'इकाई 5: Multimedia programming और applications',
        'Key aspects of multimedia programming; basic GUI libraries for multimedia in Python; basic animation APIs in Python; overview of multimedia applications.')
    ],
    practicals: [
      'Create desktop-publishing work using a graphics platform.',
      'Create animations in Blender and import artwork.',
      'Create smiling-face and angry-face animations.',
      'Draw a moving car/bike/cycle on screen.',
      'Build a multimedia-enabled web, mobile or game application.'
    ]
  }),
  C({
    semester: 5, name: 'Advance Computer Networks', nameHi: 'एडवांस कंप्यूटर नेटवर्क',
    code: '521', officialCode: '521', paperCode: '7495', icon: Wifi,
    tag: 'OR elective B', electiveGroup: 'B', credits: '3 theory',
    group: 'Elective B — the scheme lists Advance Computer Networks OR Data Sciences: Data Warehousing and Data Mining',
    units: [
      U('Unit 1: Advanced IP networking and transport concepts', 'इकाई 1: Advanced IP networking और transport concepts',
        'Review OSI/TCP-IP, IPv4 addressing and routing versus switching; CIDR/subnet masks and subnet design; unicast, broadcast and multicast; TCP header, sliding-window flow control, acknowledgements, congestion-control mechanisms and protocol spoofing; need for IPv6 and IPv6 features.'),
      U('Unit 2: Wireless-network technologies', 'इकाई 2: Wireless-network technologies',
        'Telecom-network components/services; Frame Relay, ATM and MPLS; VSAT and TDMA/FDMA basics; Wi-Fi (802.11), WiMAX (802.16), GSM, CDMA, 3G and 4G/LTE.'),
      U('Unit 3: Network reliability, performance and monitoring', 'इकाई 3: Network reliability, performance और monitoring',
        'Network redundancy; load balancing (hardware/software, local/global, round-robin, least connections, IP hash); browser/proxy/CDN caching; NAS and SAN storage; QoS bandwidth, delay, jitter, loss, shaping/policing, DiffServ/MPLS; SNMP and RMON.'),
      U('Unit 4: Network security and secure infrastructure', 'इकाई 4: Network security और secure infrastructure',
        'Common threats and CIA triad; VLAN benefits; VPN types and IPsec/SSL; hardware/software firewalls; IPS versus IDS; proxy-server definition and uses.'),
      U('Unit 5: Network design, simulation and analysis', 'इकाई 5: Network design, simulation और analysis',
        'Cisco Packet Tracer and GNS3; design of small-office/campus networks; IP planning, device selection and VLAN setup; IPv4 ranges and subnetting; IPv6 introduction; capture and inspect traffic using Wireshark and filters.')
    ]
  }),
  C({
    semester: 5, name: 'Data Sciences: Data Warehousing and Data Mining',
    nameHi: 'डेटा साइंसेज: Data Warehousing और Data Mining',
    code: '522', officialCode: '522', paperCode: '7496', icon: Database,
    tag: 'OR elective B', electiveGroup: 'B', credits: '3 theory',
    group: 'Elective B — the scheme lists Advance Computer Networks OR Data Sciences: Data Warehousing and Data Mining',
    units: [
      U('Unit 1: Data warehousing and OLAP', 'इकाई 1: Data warehousing और OLAP',
        'Data-warehouse definition/characteristics; OLTP versus OLAP; OLAP operations; data cubes and computation; data marts and architecture; star/snowflake schema, fact and dimension tables; ETL; physical design and metadata management.'),
      U('Unit 2: Data mining and preprocessing', 'इकाई 2: Data mining और preprocessing',
        'Definition, importance, types, functionalities and applications of data mining; system classification, task primitives and issues; database/warehouse integration; data quality; KDD cleaning, transformation, reduction, integration and discretization; KNN, Decision Tree, Random Forest, Naive Bayes, K-Means, hierarchical clustering and Apriori.'),
      U('Unit 3: Basics of data science', 'इकाई 3: Data science की मूल बातें',
        'Definition, scope, importance, lifecycle and applications; structured, unstructured and semi-structured data; quantitative versus qualitative data; data-science roles; collection, preprocessing, analysis, visualization, modelling and prediction; Pandas, NumPy, Matplotlib and Seaborn.'),
      U('Unit 4: Data wrangling and applications', 'इकाई 4: Data wrangling और applications',
        'Handle missing values, duplicates, transformations, merging and joins; outlier analysis and standard-deviation/IQR/Z-score methods; clean noisy/invalid data; integrate multiple sources; normalize, standardize and encode; feature selection, PCA and discretization.'),
      U('Unit 5: Machine learning and deep learning', 'इकाई 5: Machine learning और deep learning',
        'Supervised, unsupervised and reinforcement learning; linear, multiple-linear, polynomial, Ridge and Lasso regression; MAE/MSE; SVM, decision trees, KNN and logistic regression; confusion matrix, precision, recall and F1-score; neural networks, perceptron, ReLU/Leaky ReLU/Sigmoid; FNN, CNN, RNN and applications.')
    ]
  }),
  C({
    semester: 5, name: 'Renewable Energy Technologies', nameHi: 'रिन्यूएबल एनर्जी टेक्नोलॉजीज',
    code: '531', officialCode: '531', paperCode: '7601', icon: Sun,
    tag: 'OR elective C', electiveGroup: 'C', credits: '3 theory',
    group: 'Elective C — the scheme lists Renewable Energy Technologies OR Operation Research',
    units: [
      U('Unit 1: Introduction to energy resources', 'इकाई 1: Energy resources का परिचय',
        'Classification of energy resources; worldwide energy use/demand; conventional-energy reserves; need for renewable energy; climate change and global warming; renewable-energy scenarios in India and worldwide; simple-payback economic analysis.'),
      U('Unit 2: Solar energy', 'इकाई 2: Solar energy',
        'Solar radiation and measurement; solar PV and thermal systems; photovoltaic-cell working and materials; PV modules and on-grid/off-grid applications; solar-thermal conversion and flat-plate/concentrating collectors; advantages and limitations.'),
      U('Unit 3: Wind energy', 'इकाई 3: Wind energy',
        'Importance of wind data; wind-energy conversion and energy estimation; types of wind-energy systems; performance factors and site selection; DC, AC synchronous and AC asynchronous wind-turbine generators; safety and environmental aspects.'),
      U('Unit 4: Bio-energy', 'इकाई 4: Bio-energy',
        'Biomass direct combustion and gasification; working and types of biogas plants; digesters; ethanol and biodiesel production; cogeneration systems and benefits; biomass applications.'),
      U('Unit 5: Other renewable-energy sources', 'इकाई 5: अन्य renewable-energy sources',
        'Tidal and wave energy; Ocean Thermal Energy Conversion (OTEC); small hydropower; geothermal systems; hydrogen energy and storage; fuel cells; hybrid systems and their advantages.')
    ]
  }),
  C({
    semester: 5, name: 'Operation Research', nameHi: 'ऑपरेशन रिसर्च',
    code: '532', officialCode: '532', paperCode: '7610', icon: Calculator,
    tag: 'OR elective C', electiveGroup: 'C', credits: '3 theory',
    group: 'Elective C — the scheme lists Renewable Energy Technologies OR Operation Research',
    units: [
      U('Unit 1: Development and models of Operations Research', 'इकाई 1: Operations Research का विकास और models',
        'Definition, history, applications, scope and importance; characteristics of OR problems; scientific method and its phases; OR models and types; linear programming, game theory, transportation, assignment and sequencing methods.'),
      U('Unit 2: Allocation and linear-programming problems', 'इकाई 2: Allocation और linear-programming problems',
        'LPP introduction, components, formulation and characteristics; graphical method for two variables; simplex method and conversion to standard LPP; numerical problems; basic primal-to-dual conversion using duality.'),
      U('Unit 3: Transportation and assignment problems', 'इकाई 3: Transportation और assignment problems',
        'Formulate transportation problems; North-West Corner, Least Cost and Vogel’s Approximation methods; balanced and unbalanced transportation problems; assignment formulation and Hungarian method.'),
      U('Unit 4: Sequencing', 'इकाई 4: Sequencing',
        'Sequencing terminology, notation and assumptions; Johnson’s algorithm for n jobs and two machines; numerical problems; convert n jobs/three machines to two-machine form and solve examples.'),
      U('Unit 5: Game theory', 'इकाई 5: Game theory',
        'Uses and types of games; strategies; two-person zero-sum games; maximin and minimax principles; games without saddle points and mixed strategies for 2×2 games.')
    ]
  }),
  C({
    semester: 5, name: 'Summer Internship - II', nameHi: 'समर इंटर्नशिप - II',
    code: 'V-INTERNSHIP', officialCode: '—', paperCode: '—', icon: CalendarDays,
    tag: 'Internship', credits: '3 credits', group: 'Internship',
    units: [
      U('Internship scope and assessment', 'इंटर्नशिप का दायरा और मूल्यांकन',
        'The semester scheme specifies a 4–6 week summer internship after Semester IV. The scheme table describes evaluation through internship work/report and practical evaluation.')
    ],
    sourceNote: 'This is an internship requirement, not a five-unit theory course.'
  }),
  C({
    semester: 5, name: 'Major Project (Semester V progress)', nameHi: 'मेजर प्रोजेक्ट (सेमेस्टर V)',
    code: 'V-MAJOR-PROJECT', officialCode: '—', paperCode: '—', icon: Briefcase,
    tag: 'Project', credits: 'Progress/term-work entry', group: 'Project',
    units: [
      U('Project planning and progress', 'प्रोजेक्ट planning और progress',
        'The Semester V scheme includes a Major Project/term-work entry and states that one credit is carried forward to the Semester VI major-project evaluation. Detailed project content is not split into numbered units in the PDF.')
    ],
    sourceNote: 'Project evaluation details are specified in the Semester VI major-project section.'
  }),

  // ------------------------------ SEMESTER VI ------------------------------
  C({
    semester: 6, name: 'Entrepreneurship and Start-ups', nameHi: 'Entrepreneurship और Start-ups',
    code: '601', officialCode: '601', paperCode: '7386', icon: Lightbulb,
    tag: 'Core', credits: '4 theory credits', group: 'Core',
    units: [
      U('Unit 1: Introduction to entrepreneurship and start-ups', 'इकाई 1: Entrepreneurship और start-ups का परिचय',
        'Definitions; traits of an entrepreneur; intrapreneurship and motivation; business structures; similarities and differences between entrepreneurs and managers.'),
      U('Unit 2: Business ideas and implementation', 'इकाई 2: Business ideas और implementation',
        'Discover and visualize business ideas; activity map; business plan.'),
      U('Unit 3: From idea to start-up', 'इकाई 3: Idea से start-up तक',
        'Market analysis and target market; competition evaluation and strategy development; marketing and accounting; risk analysis.'),
      U('Unit 4: Management', 'इकाई 4: Management',
        'Company organizational structure; recruitment and talent management; financial organization and management.'),
      U('Unit 5: Financing and protection of ideas', 'इकाई 5: Financing और ideas की protection',
        'Start-up financing methods available in India; communicating ideas to potential investors and investor pitches; patents and licences.'),
      U('Unit 6: Exit strategies', 'इकाई 6: Exit strategies',
        'Exit strategies for entrepreneurs; bankruptcy; succession; harvesting strategy.')
    ]
  }),
  C({
    semester: 6, name: 'Mobile Computing', nameHi: 'मोबाइल कंप्यूटिंग',
    code: '611', officialCode: '611', paperCode: '7497', icon: Smartphone,
    tag: 'OR elective A + Lab', electiveGroup: 'A', credits: '3 theory + 2 practical',
    group: 'Elective A — the scheme lists Mobile Computing OR Network Forensics',
    units: [
      U('Unit 1: Mobile and Android foundations', 'इकाई 1: Mobile और Android foundations',
        'Mobile history and phone generations; mobile ecosystem and application types; mobile information architecture; Android versions/features/architecture; Android SDK tools, Eclipse/ADT and Android Virtual Devices (AVD).'),
      U('Unit 2: First application, activities and intents', 'इकाई 2: First application, activities और intents',
        'Create and deploy an Android app; application anatomy and components; Activity lifecycle; activities; Intent objects and types; link activities using intents.'),
      U('Unit 3: Fragments, layouts and UI widgets', 'इकाई 3: Fragments, layouts और UI widgets',
        'Fragment lifecycle and interaction; screen components/layouts and orientation; Action Bar; Button, Toast, ToggleButton, CheckBox, RadioButton, Spinner, WebView, EditText, DatePicker, TimePicker, ListView, ProgressBar and clocks; UI events, list fragments and dialog fragments.'),
      U('Unit 4: Menus, media and device services', 'इकाई 4: Menus, media और device services',
        'Option/context/popup menus; ImageView and ImageSwitcher; AlertDialog; Alarm Manager; SMS and email; Media Player; camera and video recording; Telephony Manager.'),
      U('Unit 5: Persistent data and publishing', 'इकाई 5: Persistent data और publishing',
        'Preferences; internal/external storage; Content Providers; SQLite connection and insert/delete/update/fetch operations; publishing Android apps and deploying APK files.')
    ],
    practicals: [
      'Practise weekly Android-tool tasks from the theory topics.',
      'Build, deploy and test basic mobile applications on an emulator/device.',
      'Use layouts, widgets, intents, media and data persistence in a small project.'
    ]
  }),
  C({
    semester: 6, name: 'Network Forensics', nameHi: 'नेटवर्क फॉरेंसिक्स',
    code: '612', officialCode: '612', paperCode: '7498', icon: Search,
    tag: 'OR elective A + Lab', electiveGroup: 'A', credits: '3 theory + 2 practical',
    group: 'Elective A — the scheme lists Mobile Computing OR Network Forensics',
    units: [
      U('Unit 1: Network-forensics foundations', 'इकाई 1: Network forensics की मूल बातें',
        'Review networking concepts and protocols; introduction to network forensics; different aspects of network forensics.'),
      U('Unit 2: Forensic tools and techniques', 'इकाई 2: Forensic tools और techniques',
        'Wireshark, TCPDump, Syslog and NMS; promiscuous mode; network-port mirroring; snooping and scanning tools.'),
      U('Unit 3: Network-layer evidence and device logs', 'इकाई 3: Network-layer evidence और device logs',
        'Examine Data Link and Physical layers; Ethernet-switch logs, MAC table and ARP table; examine the Network Layer, router logs, Wi-Fi-device logs and firewall logs.'),
      U('Unit 4: OS, application and user-activity logs', 'इकाई 4: OS, application और user-activity logs',
        'Audit features of operating systems and applications; enable/examine server logs, user-activity logs, browser history, proxy-server logs, antivirus logs and email logs.'),
      U('Unit 5: Limitations and challenges', 'इकाई 5: Limitations और challenges',
        'Challenges caused by encryption, spoofing, mobility, storage limitations, privacy laws and related network-forensics constraints.')
    ],
    practicals: [
      'Practise tools and techniques covered during the week using authorized lab systems.',
      'Read packet captures and device/system logs to understand how evidence is examined.',
      'Use only approved lab captures or systems for investigative exercises.'
    ]
  }),
  C({
    semester: 6, name: 'Software Testing', nameHi: 'सॉफ्टवेयर टेस्टिंग',
    code: '621', officialCode: '621', paperCode: '7499', icon: ClipboardCheck,
    tag: 'OR elective B + Lab', electiveGroup: 'B', credits: '3 theory + 2 practical',
    group: 'Elective B — the scheme lists Software Testing OR Free and Open Source Software (FOSS)',
    units: [
      U('Unit 1: Software-testing basics', 'इकाई 1: Software testing की मूल बातें',
        'Software quality; verification and validation; quality perspectives and testing terminology; Software Testing Life Cycle (STLC); V-model; QA process; testing cost and types of tests.'),
      U('Unit 2: Writing test cases', 'इकाई 2: Test cases लिखना',
        'Functional and non-functional/performance testing; UI testing; preparing test data; unit, integration and user-acceptance tests; prepare scenarios from software requirements.'),
      U('Unit 3: Test execution and management', 'इकाई 3: Test execution और management',
        'Test execution and oracles; test planning/strategy and stop criteria; coverage and traceability matrix; JIRA, Bugzilla and bug-tracking tools; test-data mining and test reporting.'),
      U('Unit 4: Test automation', 'इकाई 4: Test automation',
        'Why/when to automate or not automate; write simple automated cases; learn and practise an automation framework such as Selenium (the PDF text ends this example with “and …”).'),
      U('Unit 5: Other quality assurance', 'इकाई 5: अन्य quality assurance topics',
        'Quality and defect management; code reviews; quality tools; change management and version control.')
    ],
    practicals: [
      'Write and execute different test cases for a sample system or earlier project.',
      'Use Bugzilla to report defects.',
      'Write performance cases for load, stress and benchmarking tests.',
      'Write UI-automation tests and execute scripts for a sample system.'
    ]
  }),
  C({
    semester: 6, name: 'Free and Open Source Software (FOSS)',
    nameHi: 'फ्री और ओपन सोर्स सॉफ्टवेयर (FOSS)', code: '622',
    officialCode: '622', paperCode: '7500', icon: Terminal,
    tag: 'OR elective B + Lab', electiveGroup: 'B', credits: '3 theory + 2 practical',
    group: 'Elective B — the scheme lists Software Testing OR Free and Open Source Software (FOSS)',
    units: [
      U('Unit 1: FOSS philosophy', 'इकाई 1: FOSS philosophy',
        'FOSS community and philosophy; community-based development benefits and participation guidelines; requirements for open/free software; open-source software; FOSS licensing models and examples.'),
      U('Unit 2: Linux', 'इकाई 2: Linux',
        'Linux installation and hardware configuration; boot process; dual-booting; kernel boot options; X Window System configuration; system/server administration; backup and restore; secure-server strategies.'),
      U('Unit 3: Programming tools and techniques', 'इकाई 3: Programming tools और techniques',
        'LibreOffice; Samba/cross-platform tools; LAMP; Java/Python/Perl introduction; MySQL/PostgreSQL or equivalent databases; open-source UML tools; mobile programming; SVN/Git or equivalent version control; project-management, bug-tracking and package-management tools.'),
      U('Unit 4: FOSS case studies', 'इकाई 4: FOSS case studies',
        'Examples and case studies of FOSS implementation.')
    ],
    practicals: [
      'Practise Linux and FOSS tools on a lab system.',
      'Explore version control using Git or an equivalent system.',
      'Explore open-source utilities/apps relevant to the major project.'
    ]
  }),
  C({
    semester: 6, name: 'Disaster Management', nameHi: 'डिजास्टर मैनेजमेंट',
    code: '631', officialCode: '631', paperCode: '7603', icon: AlertTriangle,
    tag: 'OR elective C', electiveGroup: 'C', credits: '3 theory',
    group: 'Elective C — the scheme lists Disaster Management OR Project Management',
    units: [
      U('Unit 1: Understanding disaster', 'इकाई 1: Disaster को समझना',
        'Concepts and definitions of disaster, hazard, vulnerability, risk and capacity; disaster and development; disaster management.'),
      U('Unit 2: Disaster types, trends, causes and control', 'इकाई 2: Disaster types, trends, causes और control',
        'Geological disasters; hydro-meteorological disasters; biological, technological and man-made disasters; global trends and emerging risks; climate change and urban disasters.'),
      U('Unit 3: Disaster-management cycle and framework', 'इकाई 3: Disaster-management cycle और framework',
        'Paradigm shift; pre-disaster risk assessment/mapping/zonation, prevention, mitigation, early warning, preparedness, capacity development and awareness; response evacuation, communication, search/rescue, emergency-operation centres, incident-command system, relief and rehabilitation; post-disaster damage/needs assessment, restoration, recovery and reconstruction; IDNDR, Yokohama Strategy and Hyogo Framework for Action.'),
      U('Unit 4: Disaster management in India', 'इकाई 4: भारत में disaster management',
        'India’s disaster profile and major-disaster lessons; Disaster Management Act 2005; institutional and financial mechanisms; national policy, guidelines and plans; roles of local/state/national government, non-government and inter-governmental agencies.'),
      U('Unit 5: Science and technology applications', 'इकाई 5: Science और technology applications',
        'Geo-informatics including remote sensing, GIS and GPS; warning/dissemination systems; land-use planning and development regulations; safe design/construction; structural and non-structural mitigation; science and technology institutions in India.')
    ]
  }),
  C({
    semester: 6, name: 'Project Management', nameHi: 'प्रोजेक्ट मैनेजमेंट',
    code: '632', officialCode: '632', paperCode: '7604', icon: Briefcase,
    tag: 'OR elective C', electiveGroup: 'C', credits: '3 theory',
    group: 'Elective C — the scheme lists Disaster Management OR Project Management',
    units: [
      U('Unit 1: Project concepts and priorities', 'इकाई 1: Project concepts और priorities',
        'Project concept and classification; importance of project management; project life cycle; scope-cost-time priorities; project-priority matrix; work-breakdown structure.'),
      U('Unit 2: Capital-budgeting process', 'इकाई 2: Capital-budgeting process',
        'Planning, analysis, selection, financing, implementation and review; generate/screen ideas; market and demand analysis; demand forecasting; marketing planning/research; technical analysis.'),
      U('Unit 3: Financial estimates and projections', 'इकाई 3: Financial estimates और projections',
        'Project cost and financing; sales/production estimates; production cost; working-capital requirements; profitability; projected cash-flow statement and balance sheet; break-even analysis.'),
      U('Unit 4: Capital-budgeting techniques and risk', 'इकाई 4: Capital-budgeting techniques और risk',
        'Non-discounting and discounting methods; payback period; accounting rate of return; NPV; benefit-cost ratio; IRR; project risk; social cost-benefit analysis; economic rate of return; non-financial justification.'),
      U('Unit 5: Project administration and network planning', 'इकाई 5: Project administration और network planning',
        'Progress payments and expenditure planning; scheduling/network planning; Critical Path Method (CPM); payment schedules and physical progress; time-cost trade-off; PERT, cost as a function of time, least-cost duration, post-project evaluation and project-management software.')
    ]
  }),
  C({
    semester: 6, name: 'Artificial Intelligence', nameHi: 'आर्टिफिशियल इंटेलिजेंस',
    code: '641', officialCode: '641', paperCode: '7605', icon: BrainCircuit,
    tag: 'OR elective D', electiveGroup: 'D', credits: '3 theory',
    group: 'Elective D — the scheme lists Artificial Intelligence OR Engineering Economics and Accountancy',
    units: [
      U('Unit 1: Introduction to Artificial Intelligence', 'इकाई 1: Artificial Intelligence का परिचय',
        'Definition, goals, history and applications of AI.'),
      U('Unit 2: Agents and environments', 'इकाई 2: Agents और environments',
        'Agent terminology; simple-reflex, model-based reflex and goal-based agents; nature and properties of environments.'),
      U('Unit 3: Search algorithms', 'इकाई 3: Search algorithms',
        'Search terminology; brute-force strategies including Breadth-First Search and Depth-First Search; heuristic search strategies; local-search algorithms.'),
      U('Unit 4: Fuzzy-logic systems', 'इकाई 4: Fuzzy-logic systems',
        'Introduction to fuzzy logic and fuzzy systems; membership functions; fuzzification and defuzzification.'),
      U('Unit 5: Neural networks', 'इकाई 5: Neural networks',
        'Basic neural-network structure; perceptron; back-propagation.')
    ]
  }),
  C({
    semester: 6, name: 'Engineering Economics and Accountancy',
    nameHi: 'इंजीनियरिंग इकोनॉमिक्स और अकाउंटेंसी', code: '642',
    officialCode: '642*', paperCode: '7606', icon: Calculator,
    tag: 'OR elective D', electiveGroup: 'D', credits: '3 theory',
    group: 'Elective D — the scheme lists Artificial Intelligence OR Engineering Economics and Accountancy',
    sourceNote: 'Code discrepancy in the uploaded PDF: the Semester VI scheme table lists subject code 642, while the individual Engineering Economics and Accountancy course page prints 632. This portal follows the scheme-table code and flags the mismatch.',
    units: [
      U('Unit 1: Introduction to managerial economics', 'इकाई 1: Managerial economics का परिचय',
        'Managerial economics and relationship with other disciplines; firm types, objectives and goals; managerial decisions and decision analysis.'),
      U('Unit 2: Demand and supply analysis', 'इकाई 2: Demand और supply analysis',
        'Demand and types/determinants; demand function and elasticity; demand forecasting; supply and its determinants; supply function and elasticity.'),
      U('Unit 3: Production and cost analysis', 'इकाई 3: Production और cost analysis',
        'Production function and returns to scale; optimization and least-cost input; isoquants and managerial uses; cost concepts/function/types/determinants; short/long-run cost curves; cost-output decisions and cost estimation.'),
      U('Unit 4: Pricing', 'इकाई 4: Pricing',
        'Price determinants; pricing under different objectives and market structures; price discrimination; practical pricing methods; government role in price control.'),
      U('Unit 5: Financial accounting and investment analysis', 'इकाई 5: Financial accounting और investment analysis',
        'Balance sheet; profit-and-loss statement; ratio, cash-flow and funds-flow analysis; comparative financial statements; analysis/interpretation; investments, risk/return and average rate of return; payback period, NPV and IRR.')
    ]
  }),
  C({
    semester: 6, name: 'Indian Constitution', nameHi: 'भारतीय संविधान',
    code: 'VI-CONSTITUTION', officialCode: '—', paperCode: '—', icon: Landmark,
    tag: 'Additional course', credits: 'No marks/credits shown in scheme table', group: 'Additional course',
    units: [
      U('Unit 1: The Constitution — introduction', 'इकाई 1: संविधान का परिचय',
        'History of making the Indian Constitution; Preamble and basic structure; interpretation of fundamental rights and duties; Directive Principles of State Policy.'),
      U('Unit 2: Union government', 'इकाई 2: संघ सरकार',
        'Structure of the Indian Union; President: role and powers; Prime Minister and Council of Ministers; Lok Sabha and Rajya Sabha.'),
      U('Unit 3: State government', 'इकाई 3: राज्य सरकार',
        'Governor: role and powers; Chief Minister and Council of Ministers; State Secretariat.'),
      U('Unit 4: Local administration', 'इकाई 4: स्थानीय प्रशासन',
        'District administration; Municipal Corporation; Zila Panchayat.'),
      U('Unit 5: Election Commission', 'इकाई 5: निर्वाचन आयोग',
        'Role and functioning; Chief Election Commissioner; State Election Commission.')
    ]
  }),
  C({
    semester: 6, name: 'Major Project', nameHi: 'मेजर प्रोजेक्ट',
    code: 'VI-MAJOR-PROJECT', officialCode: '—', paperCode: '—', icon: Briefcase,
    tag: 'Project', credits: '4 practical credits (3 + 1 carried from Semester V)', group: 'Project',
    units: [
      U('Major project: real-world problem or startup idea', 'मेजर प्रोजेक्ट: वास्तविक समस्या या startup idea',
        'The PDF states that the project should address a real/live problem from industry, government, NGO, MSME or the rural sector, or be an innovative idea with startup potential. Evaluation considers work done, report quality, viva-voce and presentation.')
    ],
    sourceNote: 'The Semester VI scheme says one credit is carried forward from the Semester V project entry.'
  }),
  C({
    semester: 6, name: 'Seminar', nameHi: 'सेमिनार',
    code: 'VI-SEMINAR', officialCode: '—', paperCode: '—', icon: GraduationCap,
    tag: 'Presentation', credits: '1 credit', group: 'Seminar',
    units: [
      U('Seminar presentation and viva-voce', 'सेमिनार प्रस्तुति और viva-voce',
        'The PDF lists seminar assessment through the student’s work, viva-voce and presentation. It does not define numbered syllabus units.')
    ],
    sourceNote: 'The scheme specifies a one-hour duration for each student.'
  })
];

export default semesterSubjects;
