import FotoPemimpin from "@/components/components-ui/foto-pemimpin";
import React from "react";
import { BookText, Minus, Plus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { kaban } from "@/lib/image";

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
            <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <BookText className="w-6 h-6 text-rose-500" />
                TUGAS DAN FUNGSI BADAN KEUANGAN DAERAH KOTA PANGKAL PINANG
              </h2>
            </div>
            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Badan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">
                    {/* Example Pejabat Item */}
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Analis Perencanaan, Evaluasi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Muda/IIIa</p>
                        <p className="text-gray-500">Pendidikan Terahir : S-1 Akuntansi</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi facere iure ipsam velit voluptate impedit quos tempora voluptatem ut provident repellendus, ullam officia dolore iste fugiat est quasi, temporibus maxime hic natus ab! Rerum, exercitationem nesciunt, suscipit vel ullam voluptates ducimus quibusdam esse, quas sequi temporibus. Quibusdam recusandae natus adipisci doloribus animi vero reiciendis, autem aut asperiores at rem obcaecati minima nulla iure dolorum consequatur molestias laborum eaque dolores, a eum dignissimos. Necessitatibus dignissimos odit consequatur quos ut debitis provident tempora eveniet ipsam ab minus error maxime magnam, delectus repudiandae nobis reprehenderit, corrupti quo quasi vero suscipit eligendi eum! Dignissimos, eligendi ducimus? Explicabo, soluta perspiciatis! Magnam aspernatur incidunt ut vitae fugit similique vero repellendus nam sed, corrupti eos quia id. Rerum quam quaerat soluta aliquid officiis recusandae, ipsa, eum sed adipisci dignissimos consequuntur fugit distinctio enim doloremque obcaecati dolorem! Laudantium ratione illo blanditiis nobis quibusdam animi placeat saepe nisi?
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione dolores excepturi est fuga non dolore tempore voluptatibus asperiores architecto, labore minima obcaecati cum eveniet laudantium beatae placeat eos voluptates suscipit. Consequatur, rerum voluptate accusamus ad dolorem error assumenda eos quaerat debitis provident illum qui fugiat numquam ab exercitationem id ducimus atque? Aut earum hic nihil reprehenderit. Cupiditate aperiam modi architecto aut? Sequi amet mollitia magnam est, accusamus nesciunt praesentium pariatur aperiam expedita nihil doloremque doloribus, sapiente a. Molestias architecto, eos corrupti sapiente debitis impedit? Blanditiis ratione tenetur odio ipsa sequi nemo neque dolor, odit quo harum ullam est temporibus maiores voluptatibus repellendus debitis doloremque repellat quidem. Totam molestias reiciendis obcaecati fuga sunt ipsum nobis esse odit et itaque amet tempora aliquid nesciunt qui quisquam quaerat cupiditate, aspernatur, maxime recusandae consequuntur, voluptates sapiente culpa tenetur! Eaque dolores laboriosam ipsum eveniet delectus accusantium totam saepe, provident quaerat deleniti beatae nostrum omnis.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-3">
                          Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Sekretaris Badan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">
                    {/* Example Pejabat Item */}
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Analis Perencanaan, Evaluasi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Muda/IIIa</p>
                        <p className="text-gray-500">Pendidikan Terahir : S-1 Akuntansi</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi facere iure ipsam velit voluptate impedit quos tempora voluptatem ut provident repellendus, ullam officia dolore iste fugiat est quasi, temporibus maxime hic natus ab! Rerum, exercitationem nesciunt, suscipit vel ullam voluptates ducimus quibusdam esse, quas sequi temporibus. Quibusdam recusandae natus adipisci doloribus animi vero reiciendis, autem aut asperiores at rem obcaecati minima nulla iure dolorum consequatur molestias laborum eaque dolores, a eum dignissimos. Necessitatibus dignissimos odit consequatur quos ut debitis provident tempora eveniet ipsam ab minus error maxime magnam, delectus repudiandae nobis reprehenderit, corrupti quo quasi vero suscipit eligendi eum! Dignissimos, eligendi ducimus? Explicabo, soluta perspiciatis! Magnam aspernatur incidunt ut vitae fugit similique vero repellendus nam sed, corrupti eos quia id. Rerum quam quaerat soluta aliquid officiis recusandae, ipsa, eum sed adipisci dignissimos consequuntur fugit distinctio enim doloremque obcaecati dolorem! Laudantium ratione illo blanditiis nobis quibusdam animi placeat saepe nisi?
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione dolores excepturi est fuga non dolore tempore voluptatibus asperiores architecto, labore minima obcaecati cum eveniet laudantium beatae placeat eos voluptates suscipit. Consequatur, rerum voluptate accusamus ad dolorem error assumenda eos quaerat debitis provident illum qui fugiat numquam ab exercitationem id ducimus atque? Aut earum hic nihil reprehenderit. Cupiditate aperiam modi architecto aut? Sequi amet mollitia magnam est, accusamus nesciunt praesentium pariatur aperiam expedita nihil doloremque doloribus, sapiente a. Molestias architecto, eos corrupti sapiente debitis impedit? Blanditiis ratione tenetur odio ipsa sequi nemo neque dolor, odit quo harum ullam est temporibus maiores voluptatibus repellendus debitis doloremque repellat quidem. Totam molestias reiciendis obcaecati fuga sunt ipsum nobis esse odit et itaque amet tempora aliquid nesciunt qui quisquam quaerat cupiditate, aspernatur, maxime recusandae consequuntur, voluptates sapiente culpa tenetur! Eaque dolores laboriosam ipsum eveniet delectus accusantium totam saepe, provident quaerat deleniti beatae nostrum omnis.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-3">
                          Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Perbendaharaan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">
                    {/* Example Pejabat Item */}
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Analis Perencanaan, Evaluasi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Muda/IIIa</p>
                        <p className="text-gray-500">Pendidikan Terahir : S-1 Akuntansi</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi facere iure ipsam velit voluptate impedit quos tempora voluptatem ut provident repellendus, ullam officia dolore iste fugiat est quasi, temporibus maxime hic natus ab! Rerum, exercitationem nesciunt, suscipit vel ullam voluptates ducimus quibusdam esse, quas sequi temporibus. Quibusdam recusandae natus adipisci doloribus animi vero reiciendis, autem aut asperiores at rem obcaecati minima nulla iure dolorum consequatur molestias laborum eaque dolores, a eum dignissimos. Necessitatibus dignissimos odit consequatur quos ut debitis provident tempora eveniet ipsam ab minus error maxime magnam, delectus repudiandae nobis reprehenderit, corrupti quo quasi vero suscipit eligendi eum! Dignissimos, eligendi ducimus? Explicabo, soluta perspiciatis! Magnam aspernatur incidunt ut vitae fugit similique vero repellendus nam sed, corrupti eos quia id. Rerum quam quaerat soluta aliquid officiis recusandae, ipsa, eum sed adipisci dignissimos consequuntur fugit distinctio enim doloremque obcaecati dolorem! Laudantium ratione illo blanditiis nobis quibusdam animi placeat saepe nisi?
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione dolores excepturi est fuga non dolore tempore voluptatibus asperiores architecto, labore minima obcaecati cum eveniet laudantium beatae placeat eos voluptates suscipit. Consequatur, rerum voluptate accusamus ad dolorem error assumenda eos quaerat debitis provident illum qui fugiat numquam ab exercitationem id ducimus atque? Aut earum hic nihil reprehenderit. Cupiditate aperiam modi architecto aut? Sequi amet mollitia magnam est, accusamus nesciunt praesentium pariatur aperiam expedita nihil doloremque doloribus, sapiente a. Molestias architecto, eos corrupti sapiente debitis impedit? Blanditiis ratione tenetur odio ipsa sequi nemo neque dolor, odit quo harum ullam est temporibus maiores voluptatibus repellendus debitis doloremque repellat quidem. Totam molestias reiciendis obcaecati fuga sunt ipsum nobis esse odit et itaque amet tempora aliquid nesciunt qui quisquam quaerat cupiditate, aspernatur, maxime recusandae consequuntur, voluptates sapiente culpa tenetur! Eaque dolores laboriosam ipsum eveniet delectus accusantium totam saepe, provident quaerat deleniti beatae nostrum omnis.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-3">
                          Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Anggaran</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">
                    {/* Example Pejabat Item */}
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Analis Perencanaan, Evaluasi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Muda/IIIa</p>
                        <p className="text-gray-500">Pendidikan Terahir : S-1 Akuntansi</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi facere iure ipsam velit voluptate impedit quos tempora voluptatem ut provident repellendus, ullam officia dolore iste fugiat est quasi, temporibus maxime hic natus ab! Rerum, exercitationem nesciunt, suscipit vel ullam voluptates ducimus quibusdam esse, quas sequi temporibus. Quibusdam recusandae natus adipisci doloribus animi vero reiciendis, autem aut asperiores at rem obcaecati minima nulla iure dolorum consequatur molestias laborum eaque dolores, a eum dignissimos. Necessitatibus dignissimos odit consequatur quos ut debitis provident tempora eveniet ipsam ab minus error maxime magnam, delectus repudiandae nobis reprehenderit, corrupti quo quasi vero suscipit eligendi eum! Dignissimos, eligendi ducimus? Explicabo, soluta perspiciatis! Magnam aspernatur incidunt ut vitae fugit similique vero repellendus nam sed, corrupti eos quia id. Rerum quam quaerat soluta aliquid officiis recusandae, ipsa, eum sed adipisci dignissimos consequuntur fugit distinctio enim doloremque obcaecati dolorem! Laudantium ratione illo blanditiis nobis quibusdam animi placeat saepe nisi?
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione dolores excepturi est fuga non dolore tempore voluptatibus asperiores architecto, labore minima obcaecati cum eveniet laudantium beatae placeat eos voluptates suscipit. Consequatur, rerum voluptate accusamus ad dolorem error assumenda eos quaerat debitis provident illum qui fugiat numquam ab exercitationem id ducimus atque? Aut earum hic nihil reprehenderit. Cupiditate aperiam modi architecto aut? Sequi amet mollitia magnam est, accusamus nesciunt praesentium pariatur aperiam expedita nihil doloremque doloribus, sapiente a. Molestias architecto, eos corrupti sapiente debitis impedit? Blanditiis ratione tenetur odio ipsa sequi nemo neque dolor, odit quo harum ullam est temporibus maiores voluptatibus repellendus debitis doloremque repellat quidem. Totam molestias reiciendis obcaecati fuga sunt ipsum nobis esse odit et itaque amet tempora aliquid nesciunt qui quisquam quaerat cupiditate, aspernatur, maxime recusandae consequuntur, voluptates sapiente culpa tenetur! Eaque dolores laboriosam ipsum eveniet delectus accusantium totam saepe, provident quaerat deleniti beatae nostrum omnis.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-3">
                          Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Aset</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  <div className="grid grid-cols-1 text-xs md:text-sm text-justify">
                    {/* Example Pejabat Item */}
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <Image
                        src={kaban}
                        alt="Pejabat"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-64 h-72 rounded-lg object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-800">Muhammad Yasin, S.E., M.M.</h3>
                        <h3 className="font-semibold text-sm text-gray-800 -mt-1">NIP. 199411162020121001</h3>
                        <p className="text-gray-500">Jabatan : Analis Perencanaan, Evaluasi dan Pelaporan</p>
                        <p className="text-gray-500">Pangkat/Gol : Penata Muda/IIIa</p>
                        <p className="text-gray-500">Pendidikan Terahir : S-1 Akuntansi</p>
                      </div>
                    </div>
                    <p className="py-4 font-extrabold">DASAR HUKUM :</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi facere iure ipsam velit voluptate impedit quos tempora voluptatem ut provident repellendus, ullam officia dolore iste fugiat est quasi, temporibus maxime hic natus ab! Rerum, exercitationem nesciunt, suscipit vel ullam voluptates ducimus quibusdam esse, quas sequi temporibus. Quibusdam recusandae natus adipisci doloribus animi vero reiciendis, autem aut asperiores at rem obcaecati minima nulla iure dolorum consequatur molestias laborum eaque dolores, a eum dignissimos. Necessitatibus dignissimos odit consequatur quos ut debitis provident tempora eveniet ipsam ab minus error maxime magnam, delectus repudiandae nobis reprehenderit, corrupti quo quasi vero suscipit eligendi eum! Dignissimos, eligendi ducimus? Explicabo, soluta perspiciatis! Magnam aspernatur incidunt ut vitae fugit similique vero repellendus nam sed, corrupti eos quia id. Rerum quam quaerat soluta aliquid officiis recusandae, ipsa, eum sed adipisci dignissimos consequuntur fugit distinctio enim doloremque obcaecati dolorem! Laudantium ratione illo blanditiis nobis quibusdam animi placeat saepe nisi?
                    </p>
                    <p className="py-4 font-extrabold">TUGAS :</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione dolores excepturi est fuga non dolore tempore voluptatibus asperiores architecto, labore minima obcaecati cum eveniet laudantium beatae placeat eos voluptates suscipit. Consequatur, rerum voluptate accusamus ad dolorem error assumenda eos quaerat debitis provident illum qui fugiat numquam ab exercitationem id ducimus atque? Aut earum hic nihil reprehenderit. Cupiditate aperiam modi architecto aut? Sequi amet mollitia magnam est, accusamus nesciunt praesentium pariatur aperiam expedita nihil doloremque doloribus, sapiente a. Molestias architecto, eos corrupti sapiente debitis impedit? Blanditiis ratione tenetur odio ipsa sequi nemo neque dolor, odit quo harum ullam est temporibus maiores voluptatibus repellendus debitis doloremque repellat quidem. Totam molestias reiciendis obcaecati fuga sunt ipsum nobis esse odit et itaque amet tempora aliquid nesciunt qui quisquam quaerat cupiditate, aspernatur, maxime recusandae consequuntur, voluptates sapiente culpa tenetur! Eaque dolores laboriosam ipsum eveniet delectus accusantium totam saepe, provident quaerat deleniti beatae nostrum omnis.
                    </p>
                    <p className="py-4 font-extrabold">FUNGSI :</p>
                    <div className="px-6">
                      <div className="flex items-start">
                        <span className="font-semibold">1.</span>
                        <p className="text-justify leading-relaxed ml-6">
                          Meningkatkan kesejahteraan rakyat melalui peningkatan pendapatan per kapita.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">2.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mewujudkan kesejahteraan yang mendukung peningkatan kualitas pelayanan dasar sektor publik dari pendidikan dan kesehatan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">3.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengurangi dampak negatif pembangunan ekonomi seperti kemiskinan, pengangguran, ketimpangan distribusi pendapatan antar golongan dan antar daerah serta masalah pencemaran lingkungan.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">4.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan aparatur pemerintah jujur, bersih, berwibawa dan berkualitas melalui dukungan fasilitas yang memadai dan penegakan supremasi hukum.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">5.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menegakkan hukum yang tidak diskriminatif dan tanpa membedakan kedudukan pelaku guna menekan tindakan kejahatan dan aksi illegal.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">6.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menjalin kerjasama yang baik antar dinas, antar pemerintah daerah dan antar pemerintah, dewan dan masyarakat guna mencapai masyarakat yang adil, makmur, aman dan damai.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">7.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Mengembangkan sektor perdagangan dan jasa melalui pembangunan sistem informasi dan ketersediaan data yang berkualitas terutama di dalam menghadapi era globalisasi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">8.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Meningkatkan peran para pengusaha melalui peningkatan jiwa kewirausahaan, kesetaraan gender, dan dukungan terhadap wanita pengusaha dalam meningkatkan pertumbuhan dan pemerataan pembangunan ekonomi.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">9.</span>
                        <p className="text-justify leading-relaxed ml-5">
                          Menciptakan masyarakat dengan gaya hidup yang religius dan memiliki jiwa serta tubuh yang sehat.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold">10.</span>
                        <p className="text-justify leading-relaxed ml-3">
                          Menciptakan keharmonisan hidup melalui masyarakat taat hukum yang memiliki komitmen dan integritas tinggi terhadap pembangunan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Akuntansi dan Pelaporan</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  Yes. Free to use for personal and commercial projects. No attribution required.
                </CollapsibleContent>
              </Collapsible>
            </div>



            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Pedaftaran dan Penetapan Pajak Daerah</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  Yes. Free to use for personal and commercial projects. No attribution required.
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="mt-2 border rounded-lg shadow-sm">
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium">Kepala Bidang Penagihan dan Pengendalian Pajak Daerah</span>
                    <div className="ml-auto">
                      <Plus className="group-data-[state=open]:hidden" />
                      <Minus className="hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-t">
                  Yes. Free to use for personal and commercial projects. No attribution required.
                </CollapsibleContent>
              </Collapsible>
            </div>

          </section>
        </div>
        <div className="py-2 px-2 lg:flex-none lg:w-2/6">
          <FotoPemimpin />
        </div>
      </div>
    </section>
  );
}
