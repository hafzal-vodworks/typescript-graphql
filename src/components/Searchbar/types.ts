import { ChangeEventHandler, ChangeEvent } from "react";

export type SearchbarProps = {
  loading: boolean,
  value: string,
  onChange: ChangeEventHandler,
  onSearch: any
}
