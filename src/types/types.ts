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
  faq: FAQ;
  cta: CTA;
  footer: Footer;
}

export interface Header {
  brand: string;
  links: HeaderLinks;
  buttons: HeaderButtons;
}

export interface HeaderLinks {
  services: string;
  industries: string;
  howItWorks: string;
  infrastructure: string;
  pricing: string;
  contact: string;
  faq: string;
}

export interface HeaderButtons {
  bookCall: string;
}

export interface Hero {
  title: HeroTitle;
  subtitle: string;
  buttons: HeroButtons;
  stats: HeroStats;
}

export interface HeroTitle {
  line1: string;
  highlight: string;
}

export interface HeroButtons {
  strategyCall: string;
  analysis: string;
}

export interface HeroStats {
  trusted: string;
  costReduction: string;
  timezone: string;
}

export interface Problem {
  title: ProblemTitle;
  subtitle: string;
  items: ProblemItems;
  footer: string;
}

export interface ProblemTitle {
  line1: string;
  highlight: string;
  line2: string;
}

export interface ProblemItems {
  risingCosts: string;
  scalableTeams: string;
  timezoneDelays: string;
  departmentIntegration: string;
  employeeTurnover: string;
}

export interface Solution {
  title: SolutionTitle;
  subtitle: string;
  description: string;
  elements: SolutionElements;
}

export interface SolutionTitle {
  line1: string;
  highlight: string;
}

export interface SolutionElements {
  processEngineering: string;
  kpiExecution: string;
  integratedOperations: string;
  continuousOptimization: string;
}

export interface Benefits {
  title: BenefitsTitle;
  items: BenefitsItems;
}

export interface BenefitsTitle {
  line1: string;
  highlight1: string;
  line2: string;
  highlight2: string;
}

export interface BenefitsItems {
  realCostReduction: BenefitItem;
  timeZoneAlignment: BenefitItem;
  bilingualTalent: BenefitItem;
  operationalEfficiency: BenefitItem;
  scalabilityOnDemand: BenefitItem;
  fullVisibility: BenefitItem;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface Services {
  title: string;
  subtitle: string;
  items: ServicesItems;
}

export interface ServicesItems {
  logisticsTransportation: ServiceCategory;
  customerExperience: ServiceCategory;
  backOffice: ServiceCategory;
  technicalSupport: ServiceCategory;
  salesLeadGeneration: ServiceCategory;
}

export interface ServiceCategory {
  title: string;
  items: Record<string, string>;
}

export interface Differentiation {
  title: DifferentiationTitle;
  traditionalBpo: DifferentiationSection;
  invercon: InverconSection;
}

export interface DifferentiationTitle {
  line1: string;
  highlight: string;
}

export interface DifferentiationSection {
  title: string;
  items: Record<string, string>;
}

export interface InverconSection extends DifferentiationSection {
  badge: string;
}

export interface Results {
  title: ResultsTitle;
  items: ResultsItems;
}

export interface ResultsTitle {
  line1: string;
  highlight: string;
  line2: string;
}

export interface ResultsItems {
  healthcare: ResultItem;
  saas: ResultItem;
  legal: ResultItem;
  ecommerce: ResultItem;
}

export interface ResultItem {
  title: string;
  results: Record<string, string>;
}

export interface Costs {
  title: CostsTitle;
  subtitle: string;
  keys: CostsKeys;
  button: string;
}

export interface CostsTitle {
  line1: string;
  highlight: string;
}

export interface CostsKeys {
  laborCosts: string;
  infrastructureExpenses: string;
  turnoverCosts: string;
  roiIncrease: string;
}

export interface HowItWorks {
  title: HowItWorksTitle;
  steps: HowItWorksSteps;
}

export interface HowItWorksTitle {
  line1: string;
  line2: string;
  line3: string;
}

export interface HowItWorksSteps {
  discovery: Step;
  customStrategy: Step;
  pilotLaunch: Step;
  scaleOperations: Step;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface Target {
  title: TargetTitle;
  items: TargetItems;
}

export interface TargetTitle {
  line1: string;
  highlight: string;
  line2: string;
}

export interface TargetItems {
  logistics: string;
  saas: string;
  healthcare: string;
  retail: string;
  fintech: string;
  professionalServices: string;
}

export interface Infrastructure {
  title: InfrastructureTitle;
  features: InfrastructureFeatures;
}

export interface InfrastructureTitle {
  line1: string;
  highlight1: string;
  line2: string;
  highlight2: string;
}

export interface InfrastructureFeatures {
  soc2: string;
  secureData: string;
  redundantConnectivity: string;
  cloudTools: string;
  realTimeReporting: string;
}

export interface Contact {
  title: string;
  description: string;
  form: ContactForm;
}

export interface ContactForm {
  labels: ContactLabels;
  placeholders: ContactPlaceholders;
  button: string;
}

export interface ContactLabels {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  opinion: string;
}

export interface ContactPlaceholders {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  opinion: string;
}

export interface FAQ {
  title: string;
  questions: FAQQuestions;
}

export interface FAQQuestions {
  nearshoreBpo: FAQItem;
  startTime: FAQItem;
  quality: FAQItem;
  scalability: FAQItem;
  difference: FAQItem;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTA {
  title: string;
  subtitle: string;
  buttons: CTAButtons;
}

export interface CTAButtons {
  analysis: string;
  strategyCall: string;
}

export interface Footer {
  sections: FooterSections;
  bottom: FooterBottom;
}

export interface FooterSections {
  company: FooterSection;
  services: FooterSection;
  resources: FooterSection;
  legal: FooterSection;
}

export interface FooterSection {
  title: string;
  links: Record<string, string>;
}

export interface FooterBottom {
  copyright: string;
  description: string;
}