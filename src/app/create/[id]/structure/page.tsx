import createCategoryPage from "@/app/actions";
import BottomBar from "@/components/BottomBar";
import SelectCategory from "@/components/SelectedCategory";

export default function StructurePage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />

        <SelectCategory />

        <BottomBar />
      </form>
    </>
  );
}
