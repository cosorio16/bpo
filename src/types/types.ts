export interface Translations {
  header: Header;
  hero: Hero;
  problem: Problem;
  solution: Solution;
  benefits: Benefits;
  services: Services;
  differentiation: Differentiation;
  results: Results;
  costs: Costs;
  howItWorks: HowItWorks;
  target: Target;
  infrastructure: Infrastructure;
  contact: Contact;
  faq: Faq;
  cta: Cta;
  footer: Footer;
}

export interface Header {
  brand: string;
  links: Links;
  buttons: Buttons;
}

export interface Links {
  services: string;
  industries: string;
  howItWorks: string;
  infrastructure: string;
  pricing: string;
  contact: string;
  faq: string;
}

export interface Buttons {
  bookCall: string;
}

export interface Hero {
  title: Title;
  subtitle: string;
  buttons: Buttons2;
  stats: Stats;
}

export interface Title {
  line1: string;
  highlight: string;
}

export interface Buttons2 {
  strategyCall: string;
  analysis: string;
}

export interface Stats {
  trusted: string;
  costReduction: string;
  timezone: string;
}

export interface Problem {
  title: Title2;
  subtitle: string;
  items: Items;
  footer: string;
}

export interface Title2 {
  line1: string;
  highlight: string;
  line2: string;
}

export interface Items {
  risingCosts: string;
  scalableTeams: string;
  timezoneDelays: string;
  departmentIntegration: string;
  employeeTurnover: string;
}

export interface Solution {
  title: Title3;
  subtitle: string;
  description: string;
  elements: Elements;
}

export interface Title3 {
  line1: string;
  highlight: string;
}

export interface Elements {
  processEngineering: string;
  kpiExecution: string;
  integratedOperations: string;
  continuousOptimization: string;
}

export interface Benefits {
  title: Title4;
  items: Items2;
}

export interface Title4 {
  line1: string;
  highlight1: string;
  line2: string;
  highlight2: string;
}

export interface Items2 {
  realCostReduction: RealCostReduction;
  timeZoneAlignment: TimeZoneAlignment;
  bilingualTalent: BilingualTalent;
  operationalEfficiency: OperationalEfficiency;
  scalabilityOnDemand: ScalabilityOnDemand;
  fullVisibility: FullVisibility;
}

export interface RealCostReduction {
  title: string;
  description: string;
}

export interface TimeZoneAlignment {
  title: string;
  description: string;
}

export interface BilingualTalent {
  title: string;
  description: string;
}

export interface OperationalEfficiency {
  title: string;
  description: string;
}

export interface ScalabilityOnDemand {
  title: string;
  description: string;
}

export interface FullVisibility {
  title: string;
  description: string;
}

export interface Services {
  title: string;
  subtitle: string;
  items: Items3;
}

export interface Items3 {
  logisticsTransportation: LogisticsTransportation;
  customerExperience: CustomerExperience;
  backOffice: BackOffice;
  technicalSupport: TechnicalSupport;
  salesLeadGeneration: SalesLeadGeneration;
}

export interface LogisticsTransportation {
  title: string;
  items: Items4;
}

export interface Items4 {
  routeOptimization: string;
  fleetManagement: string;
  coldChain: string;
  warehouseOperations: string;
  importExport: string;
}

export interface CustomerExperience {
  title: string;
  items: Items5;
}

export interface Items5 {
  multichannelSupport: string;
  bilingualService: string;
  slaPerformance: string;
  qaCoaching: string;
}

export interface BackOffice {
  title: string;
  items: Items6;
}

export interface Items6 {
  accounts: string;
  payroll: string;
  dataEntry: string;
  financialWorkflows: string;
}

export interface TechnicalSupport {
  title: string;
  items: Items7;
}

export interface Items7 {
  helpDesk: string;
  infrastructureMonitoring: string;
  systemSupport: string;
  continuityManagement: string;
}

export interface SalesLeadGeneration {
  title: string;
  items: Items8;
}

export interface Items8 {
  leadQualification: string;
  crmManagement: string;
  outboundInbound: string;
  pipelineAcceleration: string;
}

export interface Differentiation {
  title: Title5;
  traditionalBpo: TraditionalBpo;
  invercon: Invercon;
}

export interface Title5 {
  line1: string;
  highlight: string;
}

export interface TraditionalBpo {
  title: string;
  items: Items9;
}

export interface Items9 {
  taskExecution: string;
  limitedVisibility: string;
  reactiveSupport: string;
}

export interface Invercon {
  badge: string;
  title: string;
  items: Items10;
}

export interface Items10 {
  dataDriven: string;
  performanceImprovement: string;
  integratedSystems: string;
}

export interface Results {
  title: Title6;
  items: Items11;
}

export interface Title6 {
  line1: string;
  highlight: string;
  line2: string;
}

export interface Items11 {
  healthcare: Healthcare;
  saas: Saas;
  legal: Legal;
  ecommerce: Ecommerce;
}

export interface Healthcare {
  title: string;
  results: Results2;
}

export interface Results2 {
  payrollReduction: string;
  billingDecrease: string;
}

export interface Saas {
  title: string;
  results: Results3;
}

export interface Results3 {
  costSavings: string;
  leadIncrease: string;
}

export interface Legal {
  title: string;
  results: Results4;
}

export interface Results4 {
  costReduction: string;
  backlogEliminated: string;
}

export interface Ecommerce {
  title: string;
  results: Results5;
}

export interface Results5 {
  adminSavings: string;
  financialCycles: string;
}

export interface Costs {
  title: Title7;
  subtitle: string;
  keys: Keys;
  button: string;
}

export interface Title7 {
  line1: string;
  highlight: string;
}

export interface Keys {
  laborCosts: string;
  infrastructureExpenses: string;
  turnoverCosts: string;
  roiIncrease: string;
}

export interface HowItWorks {
  title: Title8;
  steps: Steps;
}

export interface Title8 {
  line1: string;
  line2: string;
  line3: string;
}

export interface Steps {
  discovery: Discovery;
  customStrategy: CustomStrategy;
  pilotLaunch: PilotLaunch;
  scaleOperations: ScaleOperations;
}

export interface Discovery {
  step: string;
  title: string;
  description: string;
}

export interface CustomStrategy {
  step: string;
  title: string;
  description: string;
}

export interface PilotLaunch {
  step: string;
  title: string;
  description: string;
}

export interface ScaleOperations {
  step: string;
  title: string;
  description: string;
}

export interface Target {
  title: Title9;
  items: Items12;
}

export interface Title9 {
  line1: string;
  highlight: string;
  line2: string;
}

export interface Items12 {
  logistics: string;
  saas: string;
  healthcare: string;
  retail: string;
  fintech: string;
  professionalServices: string;
}

export interface Infrastructure {
  title: Title10;
  features: Features;
}

export interface Title10 {
  line1: string;
  highlight1: string;
  line2: string;
  highlight2: string;
}

export interface Features {
  soc2: string;
  secureData: string;
  redundantConnectivity: string;
  cloudTools: string;
  realTimeReporting: string;
}

export interface Contact {
  title: string;
  description: string;
  form: Form;
}

export interface Form {
  labels: Labels;
  placeholders: Placeholders;
  button: string;
}

export interface Labels {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  opinion: string;
}

export interface Placeholders {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  opinion: string;
}

export interface Faq {
  title: string;
  questions: Questions;
}

export interface Questions {
  nearshoreBpo: NearshoreBpo;
  startTime: StartTime;
  quality: Quality;
  scalability: Scalability;
  difference: Difference;
}

export interface NearshoreBpo {
  question: string;
  answer: string;
}

export interface StartTime {
  question: string;
  answer: string;
}

export interface Quality {
  question: string;
  answer: string;
}

export interface Scalability {
  question: string;
  answer: string;
}

export interface Difference {
  question: string;
  answer: string;
}

export interface Cta {
  title: string;
  subtitle: string;
  buttons: Buttons3;
}

export interface Buttons3 {
  analysis: string;
  strategyCall: string;
}

export interface Footer {
  sections: Sections;
  bottom: Bottom;
}

export interface Sections {
  company: Company;
  services: Services2;
  resources: Resources;
  legal: Legal2;
}

export interface Company {
  title: string;
  links: Links2;
}

export interface Links2 {
  about: string;
  careers: string;
  contact: string;
}

export interface Services2 {
  title: string;
  links: Links3;
}

export interface Links3 {
  technicalSupport: string;
  logistics: string;
  backOffice: string;
  customerExperience: string;
}

export interface Resources {
  title: string;
  links: Links4;
}

export interface Links4 {
  caseStudies: string;
  blog: string;
  faq: string;
}

export interface Legal2 {
  title: string;
  links: Links5;
}

export interface Links5 {
  privacyPolicy: string;
  termsOfService: string;
}

export interface Bottom {
  copyright: string;
  description: string;
}
