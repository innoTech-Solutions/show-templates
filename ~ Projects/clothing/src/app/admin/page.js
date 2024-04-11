import NavBar from "./admin-component/NavBar";
import BreadCrumb from "./admin-component/BreadCrumb";
import SearchInput from "./admin-component/Search";
import Dropdown from "./admin-component/Dropdown";
import Cards from "./admin-component/Card";
import Tab from "./admin-component/Tabs";

export default function Admin() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted">
      <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex">
        <NavBar />
      </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <BreadCrumb />
            <div className="relative ml-auto flex-1 md:grow-0">
                <SearchInput />
            </div>
            <Dropdown />
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Cards />
              </div>
                <Tab/>
            </div>
            <div>
              
            </div>
          </main>
        </div>
    </div>
  );
}
