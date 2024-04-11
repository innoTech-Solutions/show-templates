import DateTabs from "./DateTab";
import FileButton from "./FileButton";
import FilterDropdown from "./FilterDropdown";
import Tables from "./Table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Tab = () => {
    <Tabs defaultValue="week">
        <div className="flex items-center">
                <DateTabs/>
            <div className="ml-auto flex items-center gap-2">
                <FilterDropdown />
                <FileButton/>
            </div>
        </div>
              <TabsContent value="week">
                <Tables/>
              </TabsContent>
    </Tabs>
}

export default Tab;