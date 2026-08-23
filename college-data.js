const COLLEGE_DATA = {
  top50MBBS: [
    { rank: 1, college: "All India Institute of Medical Sciences (AIIMS)", city: "New Delhi", state: "Delhi", type: "Govt", est: 1956, seats: 132 },
    { rank: 2, college: "Post Graduate Institute of Medical Education and Research (PGIMER)", city: "Chandigarh", state: "Chandigarh", type: "Govt", est: 1962, seats: "-" },
    { rank: 3, college: "Christian Medical College (CMC)", city: "Vellore", state: "Tamil Nadu", type: "Private", est: 1942, seats: 100 },
    { rank: 4, college: "JIPMER", city: "Puducherry", state: "Pondicherry", type: "Govt", est: 1956, seats: 243 },
    { rank: 5, college: "Sanjay Gandhi Postgraduate Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "Govt", est: 1983, seats: "-" },
    { rank: 6, college: "Banaras Hindu University (IMS-BHU)", city: "Varanasi", state: "Uttar Pradesh", type: "Govt", est: 1916, seats: 100 },
    { rank: 7, college: "NIMHANS", city: "Bangalore", state: "Karnataka", type: "Govt", est: 1974, seats: "-" },
    { rank: 8, college: "King George's Medical University (KGMU)", city: "Lucknow", state: "Uttar Pradesh", type: "Govt", est: 1911, seats: 250 },
    { rank: 9, college: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", state: "Tamil Nadu", type: "Private", est: 1994, seats: 150 },
    { rank: 10, college: "Kasturba Medical College (KMC)", city: "Manipal", state: "Karnataka", type: "Deemed", est: 1953, seats: 250 },
    { rank: 11, college: "Saveetha Institute of Medical and Technical Sciences", city: "Chennai", state: "Tamil Nadu", type: "Deemed", est: 2008, seats: 250 },
    { rank: 12, college: "Dr. D. Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra", type: "Deemed", est: 1995, seats: 250 },
    { rank: 13, college: "AIIMS Rishikesh", city: "Rishikesh", state: "Uttarakhand", type: "Govt", est: 2012, seats: 125 },
    { rank: 14, college: "AIIMS Bhubaneswar", city: "Khordha", state: "Odisha", type: "Govt", est: 2012, seats: 125 },
    { rank: 15, college: "Siksha 'O' Anusandhan (IMS & SUM)", city: "Bhubaneswar", state: "Odisha", type: "Deemed", est: 2007, seats: 250 },
    { rank: 16, college: "Madras Medical College & Govt. General Hospital", city: "Chennai", state: "Tamil Nadu", type: "Govt", est: 1835, seats: 250 },
    { rank: 17, college: "Sree Chitra Tirunal Institute for Medical Sciences", city: "Thiruvananthapuram", state: "Kerala", type: "Govt", est: 1976, seats: "-" },
    { rank: 18, college: "S.R.M. Institute of Science and Technology", city: "Chennai", state: "Tamil Nadu", type: "Deemed", est: 1985, seats: 250 },
    { rank: 19, college: "AIIMS Jodhpur", city: "Jodhpur", state: "Rajasthan", type: "Govt", est: 2012, seats: 150 },
    { rank: 20, college: "Datta Meghe Institute of Higher Education", city: "Wardha", state: "Maharashtra", type: "Deemed", est: 2020, seats: 150 },
    { rank: 21, college: "Sri Ramachandra Institute of Higher Education", city: "Chennai", state: "Tamil Nadu", type: "Deemed", est: 1985, seats: 250 },
    { rank: 22, college: "VMMC & Safdarjung Hospital", city: "New Delhi", state: "Delhi", type: "Govt", est: 2002, seats: 170 },
    { rank: 23, college: "IPGMER", city: "Kolkata", state: "West Bengal", type: "Govt", est: 1957, seats: 200 },
    { rank: 24, college: "Kalinga Institute of Industrial Technology (KIMS)", city: "Bhubaneswar", state: "Odisha", type: "Deemed", est: 2007, seats: 250 },
    { rank: 25, college: "AIIMS Bhopal", city: "Bhopal", state: "Madhya Pradesh", type: "Govt", est: 2012, seats: 125 },
    { rank: 26, college: "Maulana Azad Medical College (MAMC)", city: "New Delhi", state: "Delhi", type: "Govt", est: 1958, seats: 250 },
    { rank: 27, college: "AIIMS Patna", city: "Patna", state: "Bihar", type: "Govt", est: 2012, seats: 125 },
    { rank: 28, college: "Institute of Liver and Biliary Sciences (ILBS)", city: "New Delhi", state: "Delhi", type: "Govt", est: 2009, seats: "-" },
    { rank: 29, college: "Aligarh Muslim University (JNMC)", city: "Aligarh", state: "Uttar Pradesh", type: "Govt", est: 1875, seats: 150 },
    { rank: 30, college: "St. John's Medical College", city: "Bengaluru", state: "Karnataka", type: "Private", est: 1963, seats: 150 },
    { rank: 31, college: "Lady Hardinge Medical College", city: "New Delhi", state: "Delhi", type: "Govt", est: 1916, seats: 240 },
    { rank: 32, college: "Govt. Medical College & Hospital (GMCH)", city: "Chandigarh", state: "Chandigarh", type: "Govt", est: 1991, seats: 150 },
    { rank: 33, college: "University College of Medical Sciences (UCMS)", city: "Delhi", state: "Delhi", type: "Govt", est: 1971, seats: 169 },
    { rank: 34, college: "Maharishi Markandeshwar (MMU)", city: "Ambala", state: "Haryana", type: "Deemed", est: 2003, seats: 200 },
    { rank: 35, college: "Dayanand Medical College (DMC)", city: "Ludhiana", state: "Punjab", type: "Private", est: 1963, seats: 100 },
    { rank: 36, college: "JSS Medical College", city: "Mysore", state: "Karnataka", type: "Deemed", est: 1984, seats: 250 },
    { rank: 37, college: "PSG Institute of Medical Sciences", city: "Coimbatore", state: "Tamil Nadu", type: "Private", est: 1985, seats: 250 },
    { rank: 38, college: "Gujarat Cancer & Research Institute", city: "Ahmedabad", state: "Gujarat", type: "Govt", est: 1972, seats: "-" },
    { rank: 39, college: "M. S. Ramaiah Medical College", city: "Bengaluru", state: "Karnataka", type: "Private", est: 1979, seats: 150 },
    { rank: 40, college: "Medical College Kolkata", city: "Kolkata", state: "West Bengal", type: "Govt", est: 1835, seats: 250 },
    { rank: 41, college: "Sawai Man Singh Medical College (SMS)", city: "Jaipur", state: "Rajasthan", type: "Govt", est: 1947, seats: 250 },
    { rank: 42, college: "Mahatma Gandhi Medical College & RI", city: "Puducherry", state: "Pondicherry", type: "Deemed", est: 2002, seats: 250 },
    { rank: 43, college: "Christian Medical College (CMC Ludhiana)", city: "Ludhiana", state: "Punjab", type: "Private", est: 1953, seats: 100 },
    { rank: 44, college: "Chettinad Academy of Research and Education", city: "Chengalpattu", state: "Tamil Nadu", type: "Deemed", est: 2005, seats: 250 },
    { rank: 45, college: "Jamia Hamdard (HIMSR)", city: "New Delhi", state: "Delhi", type: "Deemed", est: 1989, seats: 150 },
    { rank: 46, college: "GMC Thiruvananthapuram", city: "Thiruvananthapuram", state: "Kerala", type: "Govt", est: 1951, seats: 250 },
    { rank: 47, college: "Pt. B. D. Sharma PGIMS", city: "Rohtak", state: "Haryana", type: "Govt", est: 1960, seats: 250 },
    { rank: 48, college: "B. J. Medical College", city: "Ahmedabad", state: "Gujarat", type: "Govt", est: 1946, seats: 250 },
    { rank: 49, college: "AIIMS Raipur", city: "Raipur", state: "Chhattisgarh", type: "Govt", est: 2012, seats: 125 },
    { rank: 50, college: "Osmania Medical College", city: "Hyderabad", state: "Telangana", type: "Govt", est: 2006, seats: 250 }
  ],

  topBDS: [
    { rank: 1, college: "Saveetha Institute of Medical and Technical Sciences", city: "Chennai", state: "Tamil Nadu" },
    { rank: 2, college: "Manipal College of Dental Sciences", city: "Manipal", state: "Karnataka" },
    { rank: 3, college: "Dr. D. Y. Patil Vidyapeeth", city: "Pune", state: "Maharashtra" },
    { rank: 4, college: "Maulana Azad Institute of Dental Sciences (MAIDS)", city: "New Delhi", state: "Delhi" },
    { rank: 5, college: "A.B. Shetty Memorial Institute of Dental Sciences", city: "Mangaluru", state: "Karnataka" },
    { rank: 6, college: "SRM Dental College", city: "Chennai", state: "Tamil Nadu" },
    { rank: 7, college: "Sri Ramachandra Institute of Higher Education", city: "Chennai", state: "Tamil Nadu" },
    { rank: 8, college: "Manipal College of Dental Sciences", city: "Mangalore", state: "Karnataka" },
    { rank: 9, college: "Siksha 'O' Anusandhan", city: "Bhubaneshwar", state: "Odisha" },
    { rank: 10, college: "Jamia Millia Islamia", city: "New Delhi", state: "Delhi" },
    { rank: 11, college: "JSS Dental College and Hospital", city: "Mysuru", state: "Karnataka" },
    { rank: 12, college: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", state: "Tamil Nadu" },
    { rank: 13, college: "Postgraduate Institute of Dental Sciences", city: "Rohtak", state: "Haryana" },
    { rank: 14, college: "M.S. Ramaiah University of Applied Sciences", city: "Bangalore", state: "Karnataka" },
    { rank: 15, college: "Govt. Dental College", city: "Nagpur", state: "Maharashtra" },
    { rank: 16, college: "Meenakshi Academy of Higher Education", city: "Chennai", state: "Tamil Nadu" },
    { rank: 17, college: "Datta Meghe Institute of Higher Education", city: "Wardha", state: "Maharashtra" },
    { rank: 18, college: "Banaras Hindu University", city: "Varanasi", state: "Uttar Pradesh" },
    { rank: 19, college: "Nair Hospital Dental College", city: "Mumbai", state: "Maharashtra" },
    { rank: 20, college: "Kalinga Institute of Industrial Technology", city: "Bhubaneshwar", state: "Odisha" },
    { rank: 21, college: "Government Dental College", city: "Ahmedabad", state: "Gujarat" },
    { rank: 22, college: "SDM College of Dental Sciences", city: "Dharwad", state: "Karnataka" },
    { rank: 23, college: "Dr. M.G.R. Educational and Research Institute", city: "Chennai", state: "Tamil Nadu" },
    { rank: 24, college: "Government Dental College", city: "Bangalore", state: "Karnataka" },
    { rank: 25, college: "Government Dental College", city: "Thiruvananthapuram", state: "Kerala" },
    { rank: 26, college: "Vishnu Dental College", city: "Bhimavaram", state: "Andhra Pradesh" },
    { rank: 27, college: "Chettinad Dental College", city: "Kelambakkam", state: "Tamil Nadu" },
    { rank: 28, college: "Yenepoya Dental College", city: "Mangaluru", state: "Karnataka" },
    { rank: 29, college: "Govt. Dental College", city: "Mumbai", state: "Maharashtra" },
    { rank: 30, college: "Christian Dental College", city: "Ludhiana", state: "Punjab" },
    { rank: 31, college: "Aligarh Muslim University", city: "Aligarh", state: "Uttar Pradesh" },
    { rank: 32, college: "Govt. Dental College", city: "Indore", state: "Madhya Pradesh" },
    { rank: 33, college: "Army College of Dental Sciences", city: "Secunderabad", state: "Telangana" },
    { rank: 34, college: "Panjab University", city: "Chandigarh", state: "Chandigarh" },
    { rank: 35, college: "KLE V.K. Institute of Dental Sciences", city: "Belgaum", state: "Karnataka" },
    { rank: 36, college: "Bapuji Dental College & Hospital", city: "Davangere", state: "Karnataka" },
    { rank: 37, college: "Karnavati University", city: "Gandhinagar", state: "Gujarat" },
    { rank: 38, college: "Padmashree Dr. D. Y. Patil Vidyapeeth", city: "Mumbai", state: "Maharashtra" },
    { rank: 39, college: "Bharati Vidyapeeth Dental College", city: "Pune", state: "Maharashtra" },
    { rank: 40, college: "Saraswati Dental College & Hospital", city: "Lucknow", state: "Uttar Pradesh" }
  ],

  topBVSc: [
    { college: "Anand Agricultural University (College of Vet Science)", founded: 2004, location: "Anand, Gujarat", fees: "₹12,000 / yr" },
    { college: "Bihar Agricultural University", founded: 2010, location: "Patna, Bihar", fees: "₹11,000 / yr" },
    { college: "College of Veterinary and Animal Sciences", founded: "-", location: "Bikaner, Rajasthan", fees: "₹16,000 / yr" },
    { college: "GB Pant University of Agriculture and Technology", founded: 1960, location: "Pantnagar, Uttarakhand", fees: "₹40,000 / yr" },
    { college: "Indian Veterinary Research Institute (IVRI)", founded: 1889, location: "Bareilly, Uttar Pradesh", fees: "₹30,000 / yr" },
    { college: "Junagadh Agriculture University", founded: 1960, location: "Junagadh, Gujarat", fees: "₹25,000 / yr" },
    { college: "Navsari Agricultural University", founded: 2004, location: "Navsari, Gujarat", fees: "₹44,500 / yr" },
    { college: "Orissa University of Agriculture & Technology (OUAT)", founded: 1962, location: "Bhubaneswar, Odisha", fees: "₹21,000 / yr" },
    { college: "Sardar Vallabh Bhai Patel University (SVPUAT)", founded: 1958, location: "Meerut, Uttar Pradesh", fees: "₹4,00,000 / yr" },
    { college: "TANUVAS (Tamil Nadu Vet & Animal Sciences Univ)", founded: 1989, location: "Chennai, Tamil Nadu", fees: "₹21,000 / yr" },
    { college: "WBUAFS (West Bengal Univ of Animal & Fishery)", founded: 1995, location: "Kolkata, West Bengal", fees: "₹16,000 / yr" },
    { college: "Guru Angad Dev Vet and Animal Sciences University (GADVASU)", founded: 2005, location: "Ludhiana, Punjab", fees: "Govt Norms" },
    { college: "Bombay Veterinary College", founded: 1886, location: "Mumbai, Maharashtra", fees: "Govt Norms" },
    { college: "Madras Veterinary College", founded: 1903, location: "Chennai, Tamil Nadu", fees: "Govt Norms" }
  ],

  neetCutoffsGovt: [
    { category: "UR / EWS", p2025: "50th", s2025: "686 - 144", p2024: "50th", s2024: "720 - 162" },
    { category: "OBC", p2025: "40th", s2025: "143 - 113", p2024: "40th", s2024: "161 - 127" },
    { category: "SC", p2025: "40th", s2025: "143 - 113", p2024: "40th", s2024: "161 - 127" },
    { category: "ST", p2025: "40th", s2025: "143 - 113", p2024: "40th", s2024: "161 - 127" },
    { category: "UR/EWS - PwD", p2025: "45th", s2025: "143 - 127", p2024: "45th", s2024: "161 - 144" },
    { category: "OBC - PwD", p2025: "40th", s2025: "126 - 113", p2024: "40th", s2024: "143 - 127" },
    { category: "SC - PwD", p2025: "40th", s2025: "126 - 113", p2024: "40th", s2024: "143 - 127" },
    { category: "ST - PwD", p2025: "40th", s2025: "126 - 113", p2024: "40th", s2024: "142 - 127" }
  ],

  neetCutoffsPrivate: [
    { category: "UR / EWS", percentile: "50th", score: "720 - 164" },
    { category: "OBC", percentile: "40th", score: "163 - 129" },
    { category: "SC", percentile: "40th", score: "163 - 129" },
    { category: "ST", percentile: "40th", score: "163 - 129" },
    { category: "UR/EWS - PwD", percentile: "45th", score: "163 - 146" },
    { category: "OBC - PwD", percentile: "40th", score: "145 - 129" },
    { category: "SC - PwD", percentile: "40th", score: "145 - 129" },
    { category: "ST - PwD", percentile: "40th", score: "145 - 129" }
  ],

  abroadUniversities: [
    {
      country: "Russia",
      flag: "🇷🇺",
      count: "50+ Universities",
      fees: "₹15L - ₹35L (Total)",
      universities: [
        "St. Petersburg State Medical University",
        "Kazan State Medical University",
        "Kazan Federal University",
        "Petrozavodsk State Medical University",
        "Bashkir State Medical University",
        "Kemerovo State Medical University",
        "Tver State Medical University"
      ]
    },
    {
      country: "Georgia",
      flag: "🇬🇪",
      count: "20+ Colleges",
      fees: "₹20L - ₹40L (Total)",
      universities: [
        "Tbilisi State Medical University",
        "Georgian American University",
        "Batumi Shota Rustaveli State University"
      ]
    },
    {
      country: "Nepal",
      flag: "🇳🇵",
      count: "26 Colleges",
      fees: "₹45L - ₹60L (Total)",
      universities: [
        "Kathmandu Medical College",
        "Nepal Medical College",
        "Manipal College of Medical Sciences",
        "Nobel Medical College"
      ]
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      count: "30+ Colleges",
      fees: "₹25L - ₹45L (Total)",
      universities: [
        "Anwar Khan Modern Medical College",
        "Popular Medical College",
        "Dhaka National Medical College"
      ]
    },
    {
      country: "Uzbekistan",
      flag: "🇺🇿",
      count: "8+ Universities",
      fees: "₹14L - ₹22L (Total)",
      universities: [
        "Samarkand State Medical University",
        "Tashkent Medical Academy",
        "Andijan State Medical Institute"
      ]
    },
    {
      country: "Kazakhstan",
      flag: "🇰🇿",
      count: "8+ Universities",
      fees: "₹15L - ₹25L (Total)",
      universities: [
        "Al-Farabi Kazakh National University",
        "Kazakh National Medical University",
        "Semey State Medical University"
      ]
    },
    {
      country: "Italy",
      flag: "🇮🇹",
      count: "30+ Universities",
      fees: "100% Scholarship Available",
      universities: [
        "University of Milan",
        "Sapienza University of Rome",
        "University of Bologna"
      ]
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      count: "10+ Universities",
      fees: "Tuition-Free / Nominal",
      universities: [
        "Heidelberg University",
        "Charité - Universitätsmedizin Berlin",
        "Ludwig Maximilian University of Munich"
      ]
    },
    {
      country: "Philippines",
      flag: "🇵🇭",
      count: "15+ Colleges",
      fees: "₹18L - ₹30L (Total)",
      universities: [
        "University of Perpetual Help",
        "AMA School of Medicine",
        "Davao Medical School Foundation"
      ]
    },
    {
      country: "China",
      flag: "🇨🇳",
      count: "45+ Universities",
      fees: "Scholarships Available",
      universities: [
        "Nanjing Medical University",
        "China Medical University",
        "Jilin University"
      ]
    }
  ],

  delhiFees: [
    { college: "All India Institute of Medical Sciences (AIIMS)", city: "New Delhi", fee: "₹ 1,628 / yr", type: "Central Govt" },
    { college: "Maulana Azad Medical College (MAMC)", city: "New Delhi", fee: "₹ 2,745 / yr", type: "Govt (DU)" },
    { college: "Lady Hardinge Medical College (LHMC)", city: "New Delhi", fee: "₹ 1,655 / yr", type: "Govt (DU)" },
    { college: "VMMC & Safdarjung Hospital", city: "New Delhi", fee: "₹ 15,000 / yr", type: "Govt (IPU)" },
    { college: "University College of Medical Sciences (UCMS)", city: "New Delhi", fee: "₹ 30,750 / yr", type: "Govt (DU)" },
    { college: "NDMC Medical College (Hindu Rao)", city: "New Delhi", fee: "₹ 50,000 / yr", type: "Govt (IPU)" },
    { college: "Dr. B.S.A Medical College", city: "Delhi", fee: "₹ 1,04,500 / yr", type: "Govt (IPU)" },
    { college: "Army College of Medical Sciences (ACMS)", city: "Delhi Cantt", fee: "₹ 5,55,700 / yr", type: "Army Quota" },
    { college: "Hamdard Inst. of Med. Sciences (HIMSR)", city: "New Delhi", fee: "₹ 16,00,000 / yr", type: "Deemed" }
  ],

  deemedFees: [
    { sr: 1, college: "Symbiosis M.C. for Women", location: "Pune, Maharashtra", fee: "₹ 10,00,000 / yr" },
    { sr: 2, college: "Hamdard Inst. of Med. Sciences (HIMSR)", location: "New Delhi", fee: "₹ 14,00,000 / yr" },
    { sr: 3, college: "Manipal Tata Medical College", location: "Jamshedpur, Jharkhand", fee: "₹ 16,09,000 / yr" },
    { sr: 4, college: "Rural Medical College and PIMS", location: "Loni, Maharashtra", fee: "₹ 16,25,000 / yr" },
    { sr: 5, college: "K.S Hegde Medical Academy", location: "Mangaluru, Karnataka", fee: "₹ 16,80,000 / yr" },
    { sr: 6, college: "MM Inst. Med. and Research", location: "Mullana, Haryana", fee: "₹ 17,00,000 / yr" },
    { sr: 7, college: "SDU Medical College", location: "Kolar, Karnataka", fee: "₹ 17,60,000 / yr" },
    { sr: 8, college: "Kasturba Medical College (KMC)", location: "Manipal / Mangalore", fee: "₹ 17,70,000 / yr" },
    { sr: 9, college: "Sri Siddhartha Medical College", location: "Tumkur, Karnataka", fee: "₹ 17,75,000 / yr" },
    { sr: 10, college: "B.L.D.E University", location: "Bijapur, Karnataka", fee: "₹ 18,00,000 / yr" },
    { sr: 11, college: "Jawahar Lal Nehru Medical College", location: "Belagavi, Karnataka", fee: "₹ 18,30,000 / yr" },
    { sr: 12, college: "JSS Medical College", location: "Mysuru, Karnataka", fee: "₹ 18,50,000 / yr" },
    { sr: 13, college: "Yenepoya Medical College", location: "Mangalore, Karnataka", fee: "₹ 18,50,000 / yr" },
    { sr: 14, college: "Kalinga Institute of Medical Sciences (KIMS)", location: "Bhubaneswar, Odisha", fee: "₹ 18,50,000 / yr" },
    { sr: 15, college: "IMS and SUM Hospital", location: "Bhubaneswar, Odisha", fee: "₹ 18,50,000 / yr" },
    { sr: 16, college: "Vinayaka Missions Medical College", location: "Karaikal, Puducherry", fee: "₹ 18,50,000 / yr" },
    { sr: 17, college: "SBKS Med. Inst. and Res. Centre", location: "Vadodara, Gujarat", fee: "₹ 18,75,000 / yr" },
    { sr: 18, college: "Amrita Institute of Medical Science", location: "Kochi, Kerala", fee: "₹ 19,00,000 / yr" },
    { sr: 19, college: "Aarupadai Veedu Medical College", location: "Puducherry", fee: "₹ 19,50,000 / yr" },
    { sr: 20, college: "MGM Medical College", location: "Navi Mumbai / Aurangabad", fee: "₹ 20,00,000 / yr" },
    { sr: 21, college: "Shri Sathya Sai Medical College", location: "Kancheepuram, Tamil Nadu", fee: "₹ 20,00,000 / yr" },
    { sr: 22, college: "VMKV Medical College and Hospital", location: "Salem, Tamil Nadu", fee: "₹ 20,00,000 / yr" },
    { sr: 23, college: "Dr. DYP Edu. Soc. Deemed Univ", location: "Kolhapur, Maharashtra", fee: "₹ 20,60,000 / yr" },
    { sr: 24, college: "Datta Meghe Inst. of Medical Science", location: "Nagpur / Wardha", fee: "₹ 20,75,000 / yr" },
    { sr: 25, college: "Bharati Vidyapeeth Medical College", location: "Pune / Sangli", fee: "₹ 21,33,495 / yr" },
    { sr: 26, college: "Mahatma Gandhi Medical College (SBV)", location: "Puducherry", fee: "₹ 22,00,000 / yr" },
    { sr: 27, college: "Sri Lakshmi Narayana Inst. of Med. Scien.", location: "Puducherry", fee: "₹ 22,00,000 / yr" },
    { sr: 28, college: "Krishna Inst. of Med. Sciences (KIMS)", location: "Karad, Maharashtra", fee: "₹ 22,50,000 / yr" },
    { sr: 29, college: "Meenakshi Medical College & RI", location: "Chennai, Tamil Nadu", fee: "₹ 22,50,000 / yr" },
    { sr: 30, college: "Raja Rajeswari Medical College", location: "Bengaluru, Karnataka", fee: "₹ 23,00,000 / yr" },
    { sr: 31, college: "ACS Medical College and Hospital", location: "Chennai, Tamil Nadu", fee: "₹ 23,00,000 / yr" },
    { sr: 32, college: "Santosh Medical College and Hospital", location: "Ghaziabad, Uttar Pradesh", fee: "₹ 24,00,000 / yr" },
    { sr: 33, college: "Chettinad Hospital and Research Inst.", location: "Kancheepuram, Tamil Nadu", fee: "₹ 24,50,000 / yr" },
    { sr: 34, college: "Saveetha Medical College", location: "Chennai, Tamil Nadu", fee: "₹ 24,75,000 / yr" },
    { sr: 35, college: "Sri Ramachandra Medical College", location: "Chennai, Tamil Nadu", fee: "₹ 25,00,000 / yr" },
    { sr: 36, college: "SRM Medical College and Hospital", location: "Chennai, Tamil Nadu", fee: "₹ 25,00,000 / yr" },
    { sr: 37, college: "Dr. DY Patil Medical College", location: "Pune, Maharashtra", fee: "₹ 25,00,000 / yr" },
    { sr: 38, college: "GITAM Institute of Medical Sciences", location: "Visakhapatnam, Andhra Pradesh", fee: "₹ 25,37,000 / yr" },
    { sr: 39, college: "Dr. DY Patil Medical College", location: "Navi Mumbai, Maharashtra", fee: "₹ 26,00,000 / yr" }
  ],

  govtStayFees: [
    { college: "Maulana Azad Medical College (MAMC)", state: "Delhi", totalFee: "₹ 14,125 (Total)", stay: "Govt. Hostels (₹1,500 - ₹5,000/yr). Subsidized mess." },
    { college: "AIIMS New Delhi", state: "Delhi", totalFee: "₹ 6,280 - ₹ 7,000", stay: "Mandatory in-campus. Nominal fee (~₹1,000/yr)." },
    { college: "JIPMER Puducherry", state: "Puducherry", totalFee: "₹ 35,075 (Total)", stay: "Excellent campus. Approx ₹15,000 - ₹20,000/yr for mess & room." },
    { college: "AIIMS Bhubaneswar & Rajkot", state: "Odisha / Gujarat", totalFee: "₹ 26,000 - ₹ 30,000", stay: "Hostel provided. Mess fee approx ₹3,500/month." },
    { college: "GMC Thiruvananthapuram", state: "Kerala", totalFee: "₹ 1.46L - ₹ 2.50L", stay: "Subsidized govt hostels. Stay strictly on merit availability." },
    { college: "King George's Medical University (KGMU)", state: "Uttar Pradesh", totalFee: "₹ 1.23L - ₹ 2.20L", stay: "Hostels available (~₹20,000 - ₹30,000 annual stay)." },
    { college: "Stanley Medical College", state: "Tamil Nadu", totalFee: "₹ 90,000 - ₹ 1.00L", stay: "In-campus stay available. Highly affordable govt rates." }
  ],

  privateMatrix: [
    { college: "JSS Medical College", state: "Karnataka", category: "Private / Deemed", totalTuition: "₹ 1.00 Cr - ₹ 1.20 Cr", hostelPerYr: "₹ 1.5L - ₹ 2.0L" },
    { college: "SRM Medical College", state: "Tamil Nadu", category: "Deemed", totalTuition: "₹ 1.13 Cr - ₹ 1.40 Cr", hostelPerYr: "₹ 1.8L - ₹ 2.5L" },
    { college: "Geetanjali Medical College & Hospital", state: "Rajasthan", category: "Private", totalTuition: "₹ 1.20 Cr - ₹ 1.70 Cr", hostelPerYr: "₹ 2.0L - ₹ 2.5L" },
    { college: "Bharati Vidyapeeth", state: "Maharashtra", category: "Deemed", totalTuition: "₹ 1.28 Cr - ₹ 1.30 Cr", hostelPerYr: "₹ 1.75L - ₹ 2.25L" },
    { college: "Dr. DY Patil Medical College", state: "Pune / Navi Mumbai", category: "Deemed", totalTuition: "₹ 1.40 Cr - ₹ 1.60 Cr", hostelPerYr: "₹ 2.5L - ₹ 3.5L (Premium)" },
    { college: "Sri Ramachandra Medical College", state: "Tamil Nadu", category: "Deemed", totalTuition: "₹ 1.45 Cr - ₹ 1.60 Cr", hostelPerYr: "₹ 2.0L - ₹ 2.5L" },
    { college: "MGM Medical College", state: "Navi Mumbai", category: "Deemed", totalTuition: "₹ 1.20 Cr - ₹ 1.30 Cr", hostelPerYr: "₹ 1.5L - ₹ 2.2L" }
  ],

  // Top 15 Most Affordable Government Colleges (Ranked by Total Course Fee)
  topAffordableGovt: [
    { rank: 1, college: "AIIMS Gorakhpur", state: "Uttar Pradesh", fee: "₹5,200 (Total)", stay: "Mandatory campus stay" },
    { rank: 2, college: "AIIMS New Delhi", state: "Delhi", fee: "₹5,356 (Total)", stay: "Mandatory/Provided (Nominal ₹1K/yr)" },
    { rank: 3, college: "AIIMS Jodhpur", state: "Rajasthan", fee: "₹5,856 (Total)", stay: "Hostel Provided. Mess Extra." },
    { rank: 4, college: "AIIMS Bhubaneswar", state: "Odisha", fee: "₹5,856 (Total)", stay: "Hostel Provided. Excellent campus." },
    { rank: 5, college: "AIIMS Bhopal", state: "Madhya Pradesh", fee: "₹7,600 (Total)", stay: "Mandatory campus stay" },
    { rank: 6, college: "Lady Hardinge Medical College (LHMC)", state: "Delhi", fee: "₹8,270 (Total)", stay: "In-campus stay. Highly subsidized." },
    { rank: 7, college: "Maulana Azad Medical College (MAMC)", state: "Delhi", fee: "₹12,900 (Total)", stay: "Govt Hostels (₹2-5K/yr)" },
    { rank: 8, college: "JIPMER Puducherry", state: "Puducherry", fee: "₹25,000 (Total)", stay: "Excellent campus stay." },
    { rank: 9, college: "IMS, Banaras Hindu University (BHU)", state: "Uttar Pradesh", fee: "₹30,000 (Total)", stay: "Provided on merit." },
    { rank: 10, college: "IPGMER Kolkata", state: "West Bengal", fee: "₹33,500 (Total)", stay: "State Govt Hostel." },
    { rank: 11, college: "Grant Medical College", state: "Maharashtra", fee: "₹45,000 (Total)", stay: "Govt rates applied." },
    { rank: 12, college: "King George's Medical University (KGMU)", state: "Uttar Pradesh", fee: "₹45,000 (Total)", stay: "Hostels available on campus." },
    { rank: 13, college: "GMCH Chandigarh", state: "Chandigarh", fee: "₹1,25,000 (Total)", stay: "Campus accommodation available." },
    { rank: 14, college: "GMC Thiruvananthapuram", state: "Kerala", fee: "₹1,44,000 (Total)", stay: "State Govt Hostel." },
    { rank: 15, college: "VMMC & Safdarjung Hospital", state: "Delhi", fee: "₹2,65,000 (Total)", stay: "Hostels available." }
  ],

  // Sorted Country Profiles with University Fees & Hostels
  abroadProfiles: {
    russia: [
      { name: "Kemerovo State Medical University", tuitionRub: "2,99,000 RUB", hostelRub: "32,000 RUB", totalBudget: "₹ 22 Lakhs" },
      { name: "Mari State University", tuitionRub: "3,20,000 RUB", hostelRub: "20,000 RUB", totalBudget: "₹ 23 Lakhs" },
      { name: "Orenburg State Medical University", tuitionRub: "3,00,000 RUB", hostelRub: "25,000 RUB", totalBudget: "₹ 24 Lakhs" },
      { name: "Petrozavodsk State Medical University", tuitionRub: "3,44,000 RUB", hostelRub: "18,600 RUB", totalBudget: "₹ 25 Lakhs" },
      { name: "Ural State Medical University", tuitionRub: "3,60,000 RUB", hostelRub: "16,000 RUB", totalBudget: "₹ 25 Lakhs" },
      { name: "Perm State Medical University", tuitionRub: "3,50,000 RUB", hostelRub: "30,000 RUB", totalBudget: "₹ 26 Lakhs" },
      { name: "Tambov State Medical University", tuitionRub: "4,10,000 RUB", hostelRub: "72,000 RUB", totalBudget: "₹ 30 Lakhs" },
      { name: "Bashkir State Medical University", tuitionRub: "4,05,000 RUB", hostelRub: "15,000 RUB", totalBudget: "₹ 30 Lakhs" },
      { name: "Northwestern State Medical Univ (St. Petersburg)", tuitionRub: "5,50,000 RUB", hostelRub: "42,000 RUB", totalBudget: "₹ 38 Lakhs" },
      { name: "Kazan Federal University", tuitionRub: "6,60,000 RUB", hostelRub: "16,000 RUB", totalBudget: "₹ 45 Lakhs" }
    ],
    kazakhstan: [
      { name: "Semey Medical University", tuitionUsd: "$3,800/yr", hostelUsd: "$600/yr", totalBudget: "₹ 28.00 Lakhs" },
      { name: "South Kazakh Medical Academy", tuitionUsd: "$4,200/yr", hostelUsd: "$700/yr", totalBudget: "₹ 30.00 Lakhs" },
      { name: "Astana Medical University", tuitionUsd: "$4,500/yr", hostelUsd: "$800/yr", totalBudget: "₹ 32.50 Lakhs" },
      { name: "Al-Farabi Kazakh National University", tuitionUsd: "$5,000/yr", hostelUsd: "$1,000/yr", totalBudget: "₹ 37.76 Lakhs" },
      { name: "Kazakh National Medical University", tuitionUsd: "$5,800/yr", hostelUsd: "$1,000/yr", totalBudget: "₹ 42.32 Lakhs" }
    ],
    uzbekistan: [
      { name: "Bukhara State Innovative University", tuitionUsd: "$2,400/yr", hostelUsd: "$400/yr", totalBudget: "₹ 15.00 Lakhs" },
      { name: "Medical Institute of Karakalpakstan", tuitionUsd: "$2,900/yr", hostelUsd: "$600/yr", totalBudget: "₹ 23.00 Lakhs" },
      { name: "Bukhara State Medical University", tuitionUsd: "$3,200/yr", hostelUsd: "$600/yr", totalBudget: "₹ 25.00 Lakhs" },
      { name: "Andijan State Medical University", tuitionUsd: "$3,500/yr", hostelUsd: "$600/yr", totalBudget: "₹ 26.00 Lakhs" },
      { name: "Samarkand State Medical University", tuitionUsd: "$3,500/yr", hostelUsd: "$350/yr", totalBudget: "₹ 26.00 Lakhs" },
      { name: "Fergana Institute of Public Health", tuitionUsd: "$3,500/yr", hostelUsd: "$700/yr", totalBudget: "₹ 26.50 Lakhs" },
      { name: "Tashkent State Medical University", tuitionUsd: "$3,500/yr", hostelUsd: "$600/yr", totalBudget: "₹ 27.00 Lakhs" }
    ],
    kyrgyzstan: [
      { name: "Asian Medical Institute", tuitionUsd: "$3,200/yr", hostelUsd: "$500/yr", totalBudget: "₹ 24.00 Lakhs" },
      { name: "Jalal-Abad International University", tuitionUsd: "$3,350/yr", hostelUsd: "$600/yr", totalBudget: "₹ 25.00 Lakhs" },
      { name: "Osh State Medical University", tuitionUsd: "$3,500/yr", hostelUsd: "$500/yr", totalBudget: "₹ 26.00 Lakhs" },
      { name: "Kyrgyz State Medical Academy", tuitionUsd: "$4,800/yr", hostelUsd: "$600/yr", totalBudget: "₹ 34.43 Lakhs" },
      { name: "Kyrgyz Russian Slavic University", tuitionUsd: "$4,000/yr", hostelUsd: "$800/yr", totalBudget: "₹ 39.06 Lakhs" }
    ],
    georgia: [
      { name: "Central University of Europe, Kutaisi", tuitionUsd: "$5,000/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 40 Lakhs" },
      { name: "Batumi Shota Rustaveli State University", tuitionUsd: "$5,500/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 42 Lakhs" },
      { name: "Grigol Robakidze GRUNI University", tuitionUsd: "$5,500/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 43 Lakhs" },
      { name: "Caucasus International University", tuitionUsd: "$5,500/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 43 Lakhs" },
      { name: "Georgian National University Tbilisi (SEU)", tuitionUsd: "$5,900/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 44 Lakhs" },
      { name: "David Tvildiani Medical University", tuitionUsd: "$6,000/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 45 Lakhs" },
      { name: "Georgian American University", tuitionUsd: "$6,000/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 45 Lakhs" },
      { name: "European University Tbilisi (EU)", tuitionUsd: "$6,500/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 48 Lakhs" },
      { name: "Tbilisi Medical Academy", tuitionUsd: "$7,000/yr", hostelLiving: "$2,500 - $3,000", totalBudget: "₹ 50 Lakhs" }
    ]
  },

  // State Quota Private Fee Slabs (Telangana, Gujarat, Haryana, Bihar, Andhra Pradesh, Madhya Pradesh)
  stateWisePrivateFeeSlabs: [
    { state: "Telangana", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Private / Minority / Trust" },
    { state: "Gujarat", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Management & SFI Quota" },
    { state: "Haryana", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Private Medical Colleges" },
    { state: "Bihar", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Private / Religious Minority" },
    { state: "Andhra Pradesh", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Cat-B (Management Quota)" },
    { state: "Madhya Pradesh", annualTuitionRange: "₹12.50 Lakhs – ₹22.00 Lakhs / yr", hostelPerYr: "₹1.50L – ₹2.00L", trustType: "Private Medical Universities" }
  ],

  statesList: [
    "Punjab", "Haryana", "Himachal Pradesh", "Chandigarh", "Rajasthan", "Uttar Pradesh", 
    "Delhi", "Karnataka", "Madhya Pradesh", "Maharashtra", "Uttarakhand", "Tamil Nadu", 
    "Gujarat", "Kerala", "Bihar", "Andhra Pradesh", "Chhattisgarh", "West Bengal", 
    "Telangana", "Jharkhand", "Odisha"
  ]
};

