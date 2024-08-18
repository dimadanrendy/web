import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import React from "react";

export const metadata = {
  title: `Tugas Fungsi - ${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
}

export default function PageTugasFungsi() {
  return (
    <section className="w-full mb-12 px-3 max-w-full mx-auto  bg-opacity-10 shadow-2xl drop-shadow-2xl shadow-slate-300 rounded-3xl">
      <div className="lg:flex lg:gap-2 p-2">
        <div className="lg:flex-none lg:w-4/6 relative">
          <section className="py-2">
            <h1 className="text-2xl font-bold text-secondary-foreground pb-4">
              Tugas dan Fungsi Bakeuda Kota Pangkal Pinang
            </h1>
            <div className="h-15 bg-rose-500 aspect-video py-4"></div>

            <p className="text-justify indent-8 mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              omnis laudantium, libero eos qui totam recusandae ullam harum
              corrupti ea voluptates est quis ipsum enim dolore. Blanditiis
              inventore esse cum dignissimos nam quod ullam! Doloremque
              repudiandae deserunt esse facilis error quam doloribus earum
              laborum, incidunt sint, excepturi praesentium mollitia natus quia
              architecto. Quaerat repudiandae nostrum hic atque dolore
              voluptatum, quod earum consequatur officiis cumque quas itaque
              eius labore possimus beatae, ratione dignissimos ipsa consequuntur
              doloribus velit. Quam quisquam asperiores maiores! Id, pariatur
              facere nostrum alias architecto soluta asperiores ad ab
              dignissimos ullam quam accusamus sit natus minus quia quaerat
              excepturi unde deserunt quo quasi. Asperiores reiciendis
              veritatis, eligendi ex sed culpa, perspiciatis atque voluptatem a
              repudiandae aspernatur, rerum possimus molestiae dolore. Nulla
              eaque suscipit temporibus repellendus veniam tempora, mollitia
              reprehenderit est nam vel ratione tempore architecto aut aliquam
              impedit molestiae. Modi hic quisquam mollitia odit necessitatibus
              architecto dignissimos tenetur enim, esse numquam. Asperiores
              neque provident quo ab voluptatem, distinctio architecto a
              corporis ea excepturi fuga quidem rerum qui quasi mollitia hic
              dolore voluptate impedit officia cumque soluta vitae? Fugiat
              doloribus eos fugit quidem, sed eius illo, placeat est excepturi
              inventore voluptates sunt voluptatum, consequuntur architecto
              vitae quaerat? Reprehenderit, ut reiciendis?
            </p>
          </section>
        </div>
        <div className="py-2 px-2 lg:flex-none lg:w-2/6">
          <FotoPemimpin />
        </div>
      </div>
    </section>
  );
}
