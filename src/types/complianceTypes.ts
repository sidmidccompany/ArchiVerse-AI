// src/types/complianceTypes.ts
export type ComplianceStatus = 'compliant' | 'pending' | 'non-compliant';

export interface ComplianceCheck {
  status: ComplianceStatus;
  notes: string;
}

export interface ComplianceChecks {
  structural: ComplianceCheck;
  fire: ComplianceCheck;
  accessibility: ComplianceCheck;
  disaster: ComplianceCheck;
  energy: ComplianceCheck;
  indemnity: ComplianceCheck;
}