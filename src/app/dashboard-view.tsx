
import Script from "next/script";

export default async function DashboardView() {

    return (
      <>
        <Script
          type="module"
          src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
        />
        <div className="h-[900px] grid sm:grid-cols-3 md:grid-col-3 gap-4 md:grid-flow-col">
          <div className="sm:col-span-3 col-span-3 rounded-lg row-span-2 bg-gray-200 overflow-auto">
            <div className="sm:flex-auto px-4 py-4">
              <h1 className="text-base font-semibold leading-10 text-gray-900">
                Malaysian Flood Dashboard
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                The Malaysian Flood Dashboard is a visual representation of
                flood data in Malaysia. This dashboard is created to help
                visualize the flood data and to help the public understand the
                flood situation in Malaysia.
              </p>
            </div>
            <div className="relative h-full w-full px-4 py-4 rounded-lg shadow-lg">
              <tableau-viz
                className="block"
                id="tableauViz"
                src="https://public.tableau.com/views/MalaysiaFloodDashboard/FloodOverview?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
                device="desktop"
                hide-tabs={true}
                toolbar="bottom"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }