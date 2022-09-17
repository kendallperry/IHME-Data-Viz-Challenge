import { useCallback, useState, useEffect } from "react";

import { SexControl, YearControl } from "./controls";
import * as api from "../api";
import "./ControlPanel.css";

export default function ControlPanel({ updateData }) {
  const [sex, setSex] = useState("Females");
  const [year, setYear] = useState(2017);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        const data = await api.fetchData({
          year_id: year,
          sex_name: sex,
        });
        data.sort((a, b) => {
          return b.mean - a.mean;
        });
        updateData(data);
      }
      fetchData();
      setIsLoading(false);
    }
  }, [sex, year, isLoading, updateData]);

  const handelSexChange = useCallback(
    (nextValue) => {
      setSex(nextValue);
      setIsLoading(true);
    },
    [setSex]
  );

  const handelYearChange = useCallback(
    (nextValue) => {
      setYear(nextValue);
      setIsLoading(true);
    },
    [setYear]
  );

  return (
    <div className="control-panel">
      <SexControl value={sex} onChange={handelSexChange} />
      <YearControl
        max={2017}
        min={1990}
        value={year}
        onChange={handelYearChange}
      />
    </div>
  );
}
