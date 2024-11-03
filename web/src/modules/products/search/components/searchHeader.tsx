import InputField from "../../../../components/atoms/InputField";

export const SearchHearder = () => {
    return (
<div class="flex flex-row justify-start items-center w-full h-20 shadow-sm bg-white-500 px-4 ">
        <h1 class="text-black font-medium text-[30px]">All Product List</h1>
        <InputField
          labelButton="Search"
          class="w-[400px] ml-6 "
          placeholder="Search Products"
          search
        />
      </div>
    );
  };