import type * as React from 'react';

/** Pill-shaped action button. `secondary` is the default; at most one `primary` per view. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** Labelled single-line input. `error` replaces `hint` and turns the field red. */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

/** On/off toggle for settings that apply immediately. Controlled via `checked`, or uncontrolled via `defaultChecked`. */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface SegmentedOption { value: string; label: React.ReactNode }

/** 2–5 mutually exclusive views or ranges. Controlled via `value`, or uncontrolled via `defaultValue`. */
export interface SegmentedControlProps {
  options: Array<string | SegmentedOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  'aria-label'?: string;
  className?: string;
}
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;

/** Short status label. Always carries a word, never colour alone. */
export interface BadgeProps {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

/** Raised surface that groups related content, with an optional header. */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  /** 'none' removes inner padding for edge-to-edge tables and lists. */
  padding?: 'default' | 'none';
}
export declare function Card(props: CardProps): React.ReactElement;

/** One KPI: label, big value, change vs. previous period, optional sparkline. Place inside a Card. */
export interface MetricProps {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Pre-formatted change, e.g. "12,4 %". The arrow is added from `trend`. */
  delta?: string;
  trend?: 'up' | 'down' | 'flat';
  /** Overrides the colour implied by `trend` (e.g. churn going down is positive). */
  deltaTone?: 'positive' | 'negative' | 'neutral';
  caption?: React.ReactNode;
  /** Numeric series for the sparkline; 2+ points. */
  data?: number[];
  className?: string;
}
export declare function Metric(props: MetricProps): React.ReactElement;

/** Translucent top bar of the app. `children` are the trailing actions. */
export interface NavBarProps {
  title?: React.ReactNode;
  leading?: React.ReactNode;
  children?: React.ReactNode;
  /** Defaults to true (position: sticky). */
  sticky?: boolean;
  className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;

declare global {
  interface Window {
    Lumen: {
      Button: typeof Button;
      TextField: typeof TextField;
      Switch: typeof Switch;
      SegmentedControl: typeof SegmentedControl;
      Badge: typeof Badge;
      Card: typeof Card;
      Metric: typeof Metric;
      NavBar: typeof NavBar;
    };
  }
}
