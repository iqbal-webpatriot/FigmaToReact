import Link from "next/link";

type ListItemProps = {
  label: string;
  list: string[];
};

export default function ListItem({ label, list }: ListItemProps) {
  return (
    <div className="w-[20rem] flex flex-col items-start gap-4">
      <p className="text-[1.25rem] leading-[1.62rem] text-[#E7E7E7] ">
        {label}
      </p>
      <ul className=" flex flex-col justify-start gap-[0.44rem] list-none text-[1rem] leading-[1.8rem] text-[#E7E7E7] font-inter ">
        {list.map((item, index) => {
          return (
            <Link href={"#"} key={index}>
              <li>{item}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
