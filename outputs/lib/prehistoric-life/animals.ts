import type { PrehistoricAnimal } from "@/lib/prehistoric-life/types";

export const prehistoricAnimals: PrehistoricAnimal[] = [
  {
    slug: "smilodon",
    commonName: "Saber-toothed cat",
    scientificName: "Smilodon fatalis",
    eyebrow: "Pleistocene predator",
    summary:
      "Smilodon fatalis was a powerfully built saber-toothed cat of the Americas, known especially from the fossil-rich Rancho La Brea deposits in Los Angeles.",
    image: {
      src: "/prehistoric-life/smilodon-journey.png",
      alt: "Artist's reconstruction of a saber-toothed cat in a cool, mixed Pleistocene landscape.",
      caption:
        "Illustrative reconstruction. Fossils reveal the animal's anatomy, but details such as exact coat colour and landscape at any one moment remain uncertain.",
    },
    timePeriod: "Late Pleistocene",
    dateRange: "Present in North America until roughly 13,000 years ago.",
    habitat:
      "Fossil evidence and ecological studies indicate that S. fatalis used varied landscapes. In southern California, evidence points to woodland preference, while its wider range included open to mixed habitats.",
    diet: "It was a carnivore that hunted large mammals. Isotopic evidence from southern Nevada associates its diet with prey such as bison, camels, deer, and tapirs; diet likely varied with place and time.",
    physicalTraits:
      "A compact, muscular cat with shortened limbs and exceptionally long upper canines. National Park Service material describes adults as roughly three feet tall, with mass estimates varying widely between specimens and methods.",
    adaptation:
      "Its unusually robust forelimbs, broad paws, and powerful body distinguish it from a sprint-focused pursuit cat. Together with the enlarged upper canines, these features point to a predator adapted to restraining large prey at close range.",
    behaviour:
      "Its robust forelimbs and limb anatomy support ambush predation. Whether Smilodon lived or hunted in stable social groups remains unresolved; fossil concentrations alone do not prove pack behaviour.",
    fossilEvidence:
      "Rancho La Brea preserves an exceptional concentration of Smilodon remains alongside many other Ice Age animals. Across its range, bones, teeth, and chemical signatures in fossil material help researchers compare anatomy, food choices, and local ecology.",
    whyItMatters:
      "Smilodon makes the end of the Ice Age tangible: it links predator anatomy, large herbivore communities, changing habitats, and the limits of what a fossil record can confidently tell us about behaviour.",
    extinction:
      "Smilodon disappeared near the end of the last Ice Age. The changing environment, loss or reorganisation of large-prey communities, and human presence are all considered in research; no single cause is established here.",
    facts: [
      { label: "Geological age", value: "Late Pleistocene" },
      { label: "Food web role", value: "Large-mammal predator" },
      { label: "Signature feature", value: "Elongated upper canines" },
      { label: "Best-known locality", value: "Rancho La Brea, California" },
    ],
    known: [
      "Thousands of S. fatalis fossils have been recovered at Rancho La Brea.",
      "Fossils reach from Alberta south through much of North America, with records into northwestern South America.",
      "Skeletal anatomy is consistent with an ambush-oriented predator rather than a long-distance pursuit specialist.",
    ],
    uncertain: [
      "Coat colour and pattern are not known from direct evidence.",
      "The frequency and structure of social behaviour cannot be established from fossil accumulation alone.",
      "Its exact extinction pathway remains debated within the broader end-Pleistocene extinction event.",
    ],
    rangeSummary:
      "The highlighted regions show a simplified, fossil-supported overview for Smilodon fatalis. They are not a reconstruction of continuous territory or exact migration routes.",
    rangeRegions: [
      {
        label: "Alberta, Canada",
        description: "Northern fossil limit reported by the U.S. National Park Service.",
        latitude: 54,
        longitude: -114,
        radius: 0.18,
      },
      {
        label: "California, United States",
        description: "Rancho La Brea in Los Angeles preserves thousands of specimens.",
        latitude: 34,
        longitude: -118,
        radius: 0.2,
      },
      {
        label: "Great Plains, United States and Canada",
        description:
          "Part of the broader North American fossil record and Ice Age prey landscape.",
        latitude: 40,
        longitude: -101,
        radius: 0.22,
      },
      {
        label: "Mexico",
        description: "North American range extended south into present-day Mexico.",
        latitude: 23,
        longitude: -102,
        radius: 0.2,
      },
    ],
    sources: [
      {
        title: "The Big Cats",
        publisher: "U.S. National Park Service",
        url: "https://www.nps.gov/articles/000/the-big-cats.htm",
      },
      {
        title: "Fossils of the 2016 National Fossil Day Artwork",
        publisher: "U.S. National Park Service",
        url: "https://www.nps.gov/articles/fossils-of-the-2016-national-fossil-day-artwork.htm",
      },
      {
        title: "Dietary ecology of Smilodon across time and space",
        publisher: "The Anatomical Record",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12506855/",
      },
    ],
  },
  {
    slug: "woolly-mammoth",
    commonName: "Woolly mammoth",
    scientificName: "Mammuthus primigenius",
    eyebrow: "Ice Age grazer",
    summary:
      "Mammuthus primigenius was a cold-adapted elephant relative that lived across the northern hemisphere's open steppe-tundra landscapes.",
    image: {
      src: "/prehistoric-life/woolly-mammoth-journey.png",
      alt: "Artist's reconstruction of a woolly mammoth on a cold, open Pleistocene steppe.",
      caption:
        "Illustrative reconstruction informed by preserved remains and fossil evidence. It represents a possible steppe-tundra setting, not a photograph of a specific place or time.",
    },
    timePeriod: "Late Middle Pleistocene to Holocene",
    dateRange:
      "Mainland populations survived into the terminal Pleistocene; isolated island populations persisted later.",
    habitat:
      "Woolly mammoths were adapted to cold, dry, treeless environments often described as mammoth steppe or steppe-tundra. Their available habitat contracted as climates and vegetation changed.",
    diet: "Their molars and wider research support a grass-rich diet, with local and seasonal variation expected across a continental range.",
    physicalTraits:
      "The Natural History Museum describes adults as around 3–3.5 metres at the shoulder and roughly four to six tonnes, depending on sex. Long hair, fat deposits, and cold tolerance were part of its Arctic adaptation.",
    adaptation:
      "A dense coat, insulating fat, relatively small ears, and specialised molars helped woolly mammoths function in cold, open environments and process abrasive vegetation. These features are supported by preserved bodies, skeletal remains, and comparison across elephant relatives.",
    behaviour:
      "Fossils, preserved remains, and comparison with living elephants inform interpretations of mammoth life. Exact herd structure, communication, and seasonal movement cannot be observed directly and should remain cautious.",
    fossilEvidence:
      "Northern permafrost has preserved bones, tusks, hair, soft tissues, and ancient DNA from woolly mammoths. Those rare remains add biological detail, while fossils across Europe, Asia, Beringia, and North America show how broad their suitable cold-stage world became.",
    whyItMatters:
      "The woolly mammoth is a record of climate change at continental scale. Its story connects evolutionary adaptation, shifting grasslands, genetic evidence, and the vulnerability of small, isolated populations.",
    extinction:
      "Research does not support a single universal cause. Climate-driven habitat change, human presence, and demographic vulnerability likely interacted differently across regions and populations.",
    facts: [
      { label: "Geological age", value: "Pleistocene to Holocene" },
      { label: "Food web role", value: "Large grazing herbivore" },
      { label: "Core environment", value: "Cold, open steppe-tundra" },
      { label: "Closest living kin", value: "Elephants" },
    ],
    known: [
      "Woolly mammoths were specialised for cold, open northern environments.",
      "Their geographic range included Europe, northern Asia, Beringia, and North America during suitable glacial conditions.",
      "Some small island populations survived after mainland populations disappeared.",
    ],
    uncertain: [
      "The relative contribution of climate, human hunting, and population history differed by place and remains actively researched.",
      "Detailed movement routes cannot be drawn from the current fossil record alone.",
      "Living-elephant comparisons are useful but cannot reproduce every aspect of mammoth behaviour.",
    ],
    rangeSummary:
      "These highlighted areas indicate the broad northern distribution associated with the woolly mammoth during cold-stage conditions. Changing climates repeatedly expanded and contracted suitable habitat.",
    rangeRegions: [
      {
        label: "Europe",
        description: "A major part of the late Pleistocene range.",
        latitude: 54,
        longitude: 20,
        radius: 0.28,
      },
      {
        label: "Siberia, Russia",
        description:
          "Northern Asia preserves extensive mammoth fossils and frozen remains.",
        latitude: 64,
        longitude: 105,
        radius: 0.34,
      },
      {
        label: "Beringia, Russia and United States",
        description:
          "The Ice Age land-and-sea region linking northeastern Asia and northwestern North America.",
        latitude: 66,
        longitude: -168,
        radius: 0.24,
      },
      {
        label: "Alaska, United States and Yukon, Canada",
        description:
          "Northwestern North America formed part of the wider northern range.",
        latitude: 64,
        longitude: -145,
        radius: 0.26,
      },
    ],
    sources: [
      {
        title: "Were all mammoths woolly?",
        publisher: "Natural History Museum, London",
        url: "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
      },
      {
        title: "Mammoth evolution as a model for species origins",
        publisher: "Natural History Museum, London",
        url: "https://www.nhm.ac.uk/our-science/research/projects/mammoth-evolution-model-species-origins.html",
      },
      {
        title: "Pattern of extinction of the woolly mammoth in Beringia",
        publisher: "Proceedings of the National Academy of Sciences",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3621396/",
      },
    ],
  },
  {
    slug: "dire-wolf",
    commonName: "Dire wolf",
    scientificName: "Aenocyon dirus",
    eyebrow: "Pleistocene canid",
    summary:
      "Aenocyon dirus was a large extinct canid of the Americas, familiar from abundant fossils at Rancho La Brea and now recognised as distinct from the living gray wolf lineage.",
    image: {
      src: "/prehistoric-life/dire-wolf-journey.png",
      alt: "Artist's reconstruction of a dire wolf moving across an open Pleistocene grassland.",
      caption:
        "Illustrative reconstruction. Fossils and ancient DNA inform its anatomy and lineage, while exact coat appearance and social behaviour are not directly known.",
    },
    timePeriod: "Late Pleistocene",
    dateRange:
      "The North American fossil record extends back roughly 250,000 years; terminal extinction occurred after about 12,800 calibrated years before present in recent interior North American work.",
    habitat:
      "Fossils occur across varied American landscapes. The exact relationship between its distribution, climate, and habitat has to be interpreted from uneven fossil preservation rather than assumed as a single uniform preference.",
    diet: "Stable-isotope and fossil studies indicate large herbivores were important. National Park Service material highlights horses, with ground sloths, bison, and camels also represented in dietary evidence from some settings.",
    physicalTraits:
      "A large, robust canid. Its anatomy resembled living wolves in some respects, but genomic research supports a deeply distinct evolutionary lineage rather than a simple oversized gray wolf.",
    adaptation:
      "A robust skull and body indicate a large carnivore capable of processing substantial prey. Anatomy alone does not establish a single hunting method, but it places Aenocyon within the large-predator guild of late Pleistocene America.",
    behaviour:
      "Fossil evidence can reveal anatomy, wear, isotopes, and place, but it cannot directly show pack size or social structure. Claims of a fixed hunting style should therefore be treated as inference.",
    fossilEvidence:
      "Rancho La Brea preserves a remarkable sample of dire-wolf fossils, while specimens from other parts of the Americas extend the geographic record. Genomic work has also changed how scientists understand its relationship to living wolves.",
    whyItMatters:
      "The dire wolf is a useful lesson in scientific revision: familiar-looking anatomy once encouraged easy comparisons with gray wolves, but genomic evidence revealed a much more distant evolutionary history.",
    extinction:
      "It vanished during the late Pleistocene turnover. Researchers examine changing prey communities, climate and habitat shifts, competition, and other pressures; evidence does not reduce this to one proven cause.",
    facts: [
      { label: "Geological age", value: "Late Pleistocene" },
      { label: "Food web role", value: "Large carnivore" },
      { label: "Scientific name", value: "Aenocyon dirus" },
      { label: "Key locality", value: "Rancho La Brea, California" },
    ],
    known: [
      "Fossils are widespread in North America, with published records also extending into South America.",
      "Recent genomic work supports Aenocyon as a distinct evolutionary lineage from gray wolves.",
      "Dietary evidence varies by locality and includes large herbivores.",
    ],
    uncertain: [
      "The geographic record is patchy, so highlighted range areas are not continuous occupancy maps.",
      "Social structure and pack behaviour are not directly preserved in fossils.",
      "The balance of forces behind extinction remains under investigation.",
    ],
    rangeSummary:
      "The globe marks a simplified view of documented American fossil regions. It is an evidence map, not a claim that every highlighted modern area was a uniform dire-wolf habitat.",
    rangeRegions: [
      {
        label: "California, United States",
        description: "Rancho La Brea preserves thousands of dire-wolf fossils.",
        latitude: 34,
        longitude: -118,
        radius: 0.2,
      },
      {
        label: "Southern Great Plains, United States",
        description:
          "Recent research documents broad fossil occurrences across this region.",
        latitude: 34,
        longitude: -99,
        radius: 0.23,
      },
      {
        label: "Midwest, United States",
        description: "Recent Iowa records extend the interior fossil record.",
        latitude: 42,
        longitude: -93,
        radius: 0.16,
      },
      {
        label: "South America",
        description:
          "Published records indicate an American range extending south of North America.",
        latitude: -24,
        longitude: -55,
        radius: 0.22,
      },
    ],
    sources: [
      {
        title: "Dire Wolf",
        publisher: "U.S. National Park Service",
        url: "https://www.nps.gov/articles/000/dire-wolf.htm",
      },
      {
        title: "An update on Aenocyon dirus in the interior of North America",
        publisher: "PeerJ",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11995895/",
      },
      {
        title: "Aenocyon dirus specimen record",
        publisher: "Smithsonian Institution",
        url: "https://www.si.edu/object/nmnhpaleobiology_13274899",
      },
    ],
  },
];

export function getPrehistoricAnimal(slug: string) {
  return prehistoricAnimals.find((animal) => animal.slug === slug);
}
