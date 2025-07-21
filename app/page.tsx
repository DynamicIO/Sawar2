'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CategoryToggle from '@/components/CategoryToggle'
import WallpaperGrid from '@/components/WallpaperGrid'
import WallpaperModal from '@/components/WallpaperModal'
import Footer from '@/components/Footer'

interface Wallpaper {
  id: string
  src: string
  title: string
  category: 'pc' | 'mobile'
}

// Function to get wallpapers from the folder structure
const getWallpapers = (): Wallpaper[] => {
  const wallpapers: Wallpaper[] = []
  
  // PC wallpapers - ALL 60+ wallpapers from your collection
  const pcFiles = [
    '20250721_1000_Magical Fantasy Wonderland_simple_compose_01k0pmag98eh3v2ypdkbfdzhr6.png',
    '20250721_1000_Magical Fantasy Wonderland_simple_compose_01k0pmag99eqgbx8y9aj378kv8.png',
    '20250721_1008_Magical Enchanted Realm_simple_compose_01k0pms8qde1s9sgp6mp8fcjwp.png',
    '20250721_1008_Magical Enchanted Realm_simple_compose_01k0pms8qefj48ws1c0kp59ww5.png',
    '20250721_1043_Magical Desert Oasis_simple_compose_01k0ppq4bvf8cvgzh6s8vgjhkv.png',
    '20250721_1043_Magical Desert Oasis_simple_compose_01k0ppq4bwfhhv4eb66a2pfhxh.png',
    '20250721_1119_Enchanting Woman Portrait_simple_compose_01k0prvp97f65v4h24ycvs2spe.png',
    '20250721_1119_Enchanting Woman Portrait_simple_compose_01k0prvp98f1ktp600gd907y0f.png',
    '2Bonifacy__a_dark_fantasy_version_of_London_in_the_year_2077_st_4106f6f7-6985-4878-a154-e747cbd2a2e7.png',
    '2Bonifacy__a_dark_fantasy_version_of_Londson_in_the_year_2077_st_4106f6f7-6985-4878-a154-e747cbd2a2e7.png',
    '2Bonifacy__Paris_in_2077_reimagined_in_a_cyberpunk_theme_with_t_3d8d87d2-cf8e-494a-abad-eadcee069829.png',
    '2Bonifacy__Paris_in_2077_reimagined_in_a_cyberpunk_theme_with_t_3d8d87d2-cf8e-494a-abad-eadcee0629829.png',
    '2Bonifacy__Paris_in_2077_reimagined_in_a_cyberpunk_theme_with_t_f8493bef-49d8-40d2-aac5-3f6d55719ee1.png',
    'a_painting_of_a_man_standing_in_front_of_city_an_ultrafine_de_8e45e4e9-af71-4b98-b431-af8b459cee48.png',
    'afoxnamedlexi_medeival_woman_with_long_curly_hair_wearing_spark_2dae61ea-a083-4b5d-bcbc-fa849b73aea3.png',
    'afoxnamedlexi_medeival_woman_with_long_curly_hair_wearing_spark_5c3a6bd9-03b7-41fd-8f81-8a3c3054886b.png',
    'afoxnamedlexi_medeival_woman_with_long_curly_hair_wearing_spark_d7aec4b9-ad2f-4eb7-856e-b713c9acd4a1.png',
    'asd.jpeg',
    'ashleydawn8594_ultra-realistic_beautiful_modern_rustic_house_on_ea76ca65-d820-4dfc-88d3-9d69b452701c.png',
    'austin____create_photorealistic_images_of_future_drone_delivery_58fb3910-bf96-4244-9ab4-70aafae669c1.png',
    'b_abraham370_beautiful_avatar_woman_blue_8k_339cf18e-7221-493f-90ea-4ea2b802ca5b.png',
    'b_abraham370_beautiful_avatar_woman_blue_8k_6b322500-6d2e-4182-a095-ffa63968fdc4.png',
    'b_abraham370_beautiful_avatar_woman_blue_8k_b85e0b50-ff87-45b6-b7c2-880ce8d36f99.png',
    'b_abraham370_beautiful_avatar_woman_blue_8k_b85e0b50-ff87-45b6-b7c2-880ce8d36f99 copy dis.png',
    'c_768789799_V6_ar11_void_8aa3f5c4-1ee3-4adc-a73f-2244f60be0a7_2.png',
    'ChatGPT Image Jul 21, 2025, 01_53_40 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_53_52 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_53_54 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_53_57 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_00 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_03 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_06 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_12 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_15 PM.png',
    'ChatGPT Image Jul 21, 2025, 01_54_18 PM.png',
    'DALL·E 2023-10-09 23.14.45 - An expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula.png',
    'DALL·E 2023-10-09 23.15.52 - A centered explosion of colorful powder on a black background.png',
    'darksolzero_a_colorful_puzzle_by_the_witness_and_portal_2_4b96c4e1-321d-4088-8e94-b7b8a74ae102.png',
    'david1232825_psychotic_smile_3b6ce9f9-59a9-4a3a-b3c2-10630da606ce.png',
    'eyes_0.png',
    'eyes_2.png',
    'gjkl.jpeg',
    'goldfinger_23574_this_logo_by_Brandon_Mably_82100a46-9f5e-4b59-b020-d12e0b013700.png',
    'hairysammoth_A_tabaxi_in_a_magical_launderette_folding_clothes_0132c6c0-cabb-4207-a4ca-ad9a557ffd0e.png',
    'hairysammoth_A_tabaxi_in_a_magical_launderette_folding_clothes_0741db04-c9eb-4b24-b627-a4695f02527e.png',
    'hairysammoth_A_tabaxi_in_a_magical_launderette_folding_clothes_30895361-e9b1-4851-821d-b78c41172c5d.png',
    'hgkl.jpeg',
    'hl.jpeg',
    'HLs6nlBnQmG5Vi8DU6-utg.jpg',
    'ideogram.jpeg',
    'ideogramoih_.jpeg',
    'jk,.jpeg',
    'jk.jpeg',
    'jklkl.jpeg',
    'jl_.jpeg',
    'l.jpeg',
    'lobr_a_beautiful_woman_with_black_hair_thick_lips_and_tall_brow_f3f1513e-dc09-40fa-97bb-e05d336a3080.png',
    'Nimo_Ben_Y_Ants_on_the_moon_neon_1c4e3856-05e4-4688-91d1-492b50e05f0f.png',
    'o_k.jpeg',
    'pascanka_animated_ilustration_for_grownups_showing_a_middle_age_c2934dd9-f7a8-4ef3-a4c9-9a49929c5d75.png',
    'progress_image_100_1fb2a8fd-48fa-492f-a64b-f8274592846b.webp',
    'Rifairy.png',
    'Screenshot 2025-02-13 084632.png',
    'sdscreates_Maa_Saraswati_hindu_goddess_indian_renaissance_illus_19f8d0e3-355c-4e92-bcd8-f037769266d9.png',
    'Soviet_abstract_energy_paint_mixing_close_shot_of_a_gorgeous_pe_04ffcc64-d1d9-4328-87bb-3ceca4b8f085.png',
    'Soviet_abstract_energy_paint_mixing_close_shot_of_a_gorgeous_pe_81de042d-bb72-47b2-99f8-2195f48db159.png',
    'tugol.jpeg',
    'uil.jpeg',
    'vengue_a_robot_playing_an_instrument_ac536675-eb7d-413f-9dea-53aa3b850cba.png',
    'victoriamartin00_80s_manga_style_little_black_cat_smelling_the__e90bd644-407b-477b-b69b-71d1f8263286.png',
    'wQc1JuroQryZRs1SSuO-NQ.jpg'
  ]

  // Mobile wallpapers
  const mobileFiles = [
    '20250721_1129_Magical iPhone Background_simple_compose_01k0ps9kmqfryrghpw9ppzftsb.png',
    '20250721_1129_Magical iPhone Background_simple_compose_01k0ps9kmreczrs5d33pbsn9j3.png',
    '20250721_1147_Magical iPhone Display_simple_compose_01k0pte4k0fn381r4gdec0mexz.png',
    '20250721_1147_Magical iPhone Display_simple_compose_01k0pte4k1emrvr9vweq2qhfpr.png',
    '20250721_1158_Magical Dreamscape Wallpaper_simple_compose_01k0pv7pm5fksvd2pwcsxvy795.png',
    '20250721_1158_Magical Dreamscape Wallpaper_simple_compose_01k0pv7pm6f24rvwdheqcpn68y.png',
    '20250721_1203_Dreamlike Portal Landscape_simple_compose_01k0pveqqgfesvp6yb11zfbjs3.png',
    '20250721_1203_Dreamlike Portal Landscape_simple_compose_01k0pveqqhey4rjz4fe93pthes.png',
    '20250721_1225_Bioluminescent Underwater Dreamscape_simple_compose_01k0pwngr3eh592v5c7fk9a5qy.png',
    '20250721_1225_Bioluminescent Underwater Dreamscape_simple_compose_01k0pwngr4fyp9r2x5agz8265e.png',
    '20250721_1229_Vibrant Optical Illusion_simple_compose_01k0pwyhz0f3ga6m39qwaax7p2.png',
    '20250721_1229_Vibrant Optical Illusion_simple_compose_01k0pwyhz1e9vv9wwgnx1v0f1y.png',
    '20250721_1243_Hypnotic Illusion Wallpaper_simple_compose_01k0pxn7h7e0yatjsrrr0t6nq2.png',
    '20250721_1243_Hypnotic Illusion Wallpaper_simple_compose_01k0pxn7h8e3drhzz99s2ba5w9.png',
    '20250721_1247_Sleek Futuristic Gradients_simple_compose_01k0py2sype89bng9z51asrmhp.png',
    '20250721_1247_Sleek Futuristic Gradients_simple_compose_01k0py2syqf2482cdbtea1gkvd.png'
  ]

  // Add PC wallpapers
  pcFiles.forEach((file, index) => {
    wallpapers.push({
      id: `pc-${index}`,
      src: `/wallpapers/pc/PC/${file}`,
      title: file.replace(/\.(png|jpg|jpeg)$/, '').replace(/_/g, ' ').replace(/\d{8}_\d{4}_/, ''),
      category: 'pc'
    })
  })

  // Add mobile wallpapers  
  mobileFiles.forEach((file, index) => {
    wallpapers.push({
      id: `mobile-${index}`,
      src: `/wallpapers/mobile/Mobile/${file}`,
      title: file.replace(/\.(png|jpg|jpeg)$/, '').replace(/_/g, ' ').replace(/\d{8}_\d{4}_/, ''),
      category: 'mobile'
    })
  })

  return wallpapers
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'pc' | 'mobile'>('pc')
  const [activeSection, setActiveSection] = useState<'home' | 'wallpapers'>('home')
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])

  useEffect(() => {
    setWallpapers(getWallpapers())
  }, [])

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home')
      const wallpapersSection = document.getElementById('wallpapers')
      
      if (!homeSection || !wallpapersSection) return
      
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const homeSectionTop = homeSection.offsetTop
      const wallpapersSectionTop = wallpapersSection.offsetTop
      
      if (scrollPosition >= wallpapersSectionTop) {
        setActiveSection('wallpapers')
      } else {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWallpaperClick = (wallpaper: Wallpaper) => {
    setSelectedWallpaper(wallpaper)
    setIsModalOpen(true)
  }

  const handleDownload = async (wallpaper: Wallpaper) => {
    try {
      const response = await fetch(wallpaper.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${wallpaper.title}.${wallpaper.src.split('.').pop()}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
      // Show success message
      if (typeof window !== 'undefined' && 'Notification' in window) {
        new Notification('Download Started!', {
          body: `${wallpaper.title} is being downloaded.`,
          icon: wallpaper.src
        })
      }
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen">
      <Header 
        activeCategory={activeCategory}
        activeSection={activeSection}
        onCategoryChange={setActiveCategory}
        onSectionChange={setActiveSection}
      />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section id="home">
          <HeroSection onExploreClick={() => setActiveSection('wallpapers')} />
        </section>

        {/* Wallpapers Section */}
        <section id="wallpapers" className="py-20 scroll-mt-20 md:scroll-mt-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-cyber font-bold mb-6">
                <span className="neon-text">Wallpaper Gallery</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto dark:text-white/60 text-gray-600">
                Choose your perfect wallpaper from our curated collection of stunning visuals
              </p>
            </motion.div>

            <CategoryToggle
              activeCategory={activeCategory}
              onCategoryChange={(category) => {
                setActiveCategory(category)
                setActiveSection('wallpapers')
              }}
            />

            <WallpaperGrid
              wallpapers={wallpapers}
              category={activeCategory}
              onWallpaperClick={handleWallpaperClick}
              onDownload={handleDownload}
            />
          </div>
        </section>
      </main>

      <Footer />

      <WallpaperModal
        wallpaper={selectedWallpaper}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedWallpaper(null)
        }}
        onDownload={handleDownload}
      />
    </div>
  )
} 