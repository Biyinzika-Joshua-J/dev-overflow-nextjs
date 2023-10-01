import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  isAuthor,
  href,
}: Props) => {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        height={16}
        width={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        <span>{value}</span>

        <span
          className={`small-regular line-clamp-1  ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {MetricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{MetricContent}</div>;
};

export default Metric;
