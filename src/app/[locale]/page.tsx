import { useTranslations } from "next-intl";
import Image from "next/image";
import { links } from "config";
import { Anchor } from "@components/ui/anchor";
import { TextShimmer } from "@components/ui/text-shimmer";
import StacksTable from "@app/components/stack-table";

export default function Page() {
  const t = useTranslations();
  return (
    <section>
      <h1 className="text-2xl font-medium tracking-tighter leading-none text-foreground">
        <TextShimmer>
          <span>{t("homepage.title.1")}</span>
          <span>{t("homepage.title.2")}</span>
          <span>{t("homepage.title.3")}</span>
          <span>{t("homepage.title.4")}</span>
        </TextShimmer>
      </h1>
      <div className="pt-4 space-y-6 sm:pt-8">
        <ProfileImage />
        {t.rich("homepage.about", {
          p: (chunks) => <p>{chunks}</p>,
          sc: (chunks) => <Anchor href={links.soundcloud}>{chunks}</Anchor>,
          li: (chunks) => <Anchor href={links.linkedin}>{chunks}</Anchor>,
          tt: (chunks) => <Anchor href={links.twitter}>{chunks}</Anchor>,
        })}
      </div>

      <StacksTable />
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="grid gap-2 mb-4 sm:block sm:float-right sm:mb-0 sm:ml-4 grid-cols-[1fr_auto_1fr]">
      <div className="w-full rounded from-muted-foreground/40 bg-linear-to-l" />

      <a href={links.github} target="_blank" rel="noopener noreferrer">
        <Image
          className="rounded sm:mt-2.5"
          alt="Profile photo"
          src="/me.jpeg"
          width={230}
          height={230}
          priority
        />
      </a>

      <div className="w-full rounded from-muted-foreground/40 bg-linear-to-r" />
    </div>
  );
}
