import { Typography } from "@/components";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="flex justify-center my-10">
        <Typography variant="p.medium">Copyright © 2023 StartEase.</Typography>
        <Typography variant="p.medium">
          &nbsp; Page by eight.{" "}
        </Typography>
      </section>
    </>
  );
};

export default Footer;
