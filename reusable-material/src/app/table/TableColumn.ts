export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
}
