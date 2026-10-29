export const sectors = ['Banking & Finance','Information Technology','Infrastructure','Automobiles','Pharmaceuticals','Energy','Consumer Goods','Metals & Mining'];
export const companies = [
 {name:'Adani Ports & SEZ',symbol:'ADANIPORTS',sector:'Infrastructure',industry:'Ports & Logistics',description:'Connecting global trade through ports, terminals, and integrated logistics.',exchange:'NSE & BSE',cap:'Large cap',available:true,initials:'AP'},
 {name:'HDFC Bank',symbol:'HDFCBANK',sector:'Banking & Finance',industry:'Private Banking',description:'Retail and wholesale banking for individuals and businesses.',exchange:'NSE & BSE',cap:'Large cap',available:false,initials:'HB'},
 {name:'Tata Consultancy Services',symbol:'TCS',sector:'Information Technology',industry:'IT Services',description:'Technology consulting and digital transformation for global businesses.',exchange:'NSE & BSE',cap:'Large cap',available:false,initials:'TC'},
 {name:'Tata Motors',symbol:'TATAMOTORS',sector:'Automobiles',industry:'Automotive',description:'Passenger and commercial vehicles across domestic and global markets.',exchange:'NSE & BSE',cap:'Large cap',available:false,initials:'TM'},
 {name:'Sun Pharmaceutical',symbol:'SUNPHARMA',sector:'Pharmaceuticals',industry:'Pharmaceuticals',description:'Specialty and generic medicines serving healthcare markets.',exchange:'NSE & BSE',cap:'Large cap',available:false,initials:'SP'},
 {name:'ITC',symbol:'ITC',sector:'Consumer Goods',industry:'Diversified Consumer Goods',description:'Consumer brands, paperboards, packaging, and agricultural businesses.',exchange:'NSE & BSE',cap:'Large cap',available:false,initials:'IT'}
];
export const sections=['Overview','Business Model','How It Works','Revenue Streams','Financial Performance','Competitive Advantages','Growth Drivers','Business Risks','Key Metrics','Sources'];
export const slug=(s:string)=>s.toLowerCase().replaceAll(' ','-');
