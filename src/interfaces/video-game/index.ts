import { PriceHistoryInterface } from 'interfaces/price-history';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VideoGameInterface {
  id?: string;
  title: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  price_history?: PriceHistoryInterface[];
  organization?: OrganizationInterface;
  _count?: {
    price_history?: number;
  };
}

export interface VideoGameGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  organization_id?: string;
}
