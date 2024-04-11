import { TabsList, TabsTrigger } from "@/components/ui/tabs"


const DateTabs = () => {
    <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
    </TabsList>
}

export default DateTabs;