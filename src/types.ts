export interface ProductSpec {
  label: string;
  val: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  specs: ProductSpec[];
  benefits: string[];
  uses: string;
  packSizes: string[];
  badge?: string;
  featured?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  projectType: string;
  message: string;
}
