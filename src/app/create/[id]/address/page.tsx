import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountries } from "@/lib/getCountries";

export default function AddressRoute() {
  const { getAllCountries } = useCountries();
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Where is your home located?
        </h2>
      </div>

      <form action="">
        <div className="w-3/5 mx-auto">
          <div className="mb-5">
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((country) => (
                    <SelectItem
                      key={country.value}
                      value={country.value}
                    >
                      {country.flag} {country.label} / {country.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </>
  );
}
