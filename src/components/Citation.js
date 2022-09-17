export default function Citation() {
  return (
    <div className="citation">
      <h3>Citation</h3>
      <p>
        Global Burden of Disease Collaborative Network. Global Burden of Disease
        Study 2017 (GBD 2017) Results. Seattle, United States: Institute for
        Health Metrics and Evaluation (IHME), 2018.
        <br />
        <br />
        Available from {" "}
        <a href={"http://ghdx.healthdata.org/gbd-results-tool"}>
          http://ghdx.healthdata.org/gbd-results-tool
        </a>
        <br />
        Permalink to opioid use disorder data: {" "}
        <a href="http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e">
          http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e
        </a>
        <br />
        <br />
        Data Definitions: <br />
        <b>Mean:</b> This is the mean death rate (number of deaths per 100,000
        people) due to opioid use disorders for a given location, sex, and year.{" "}
        <br />
        <b>Upper:</b> This is the upper bound of uncertainty for the mean <br />
        <b>Lower:</b> This is the lower bound of uncertainty for the mean <br />
      </p>
    </div>
  );
}
