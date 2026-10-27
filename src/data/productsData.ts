import { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'automotive-body-filler',
    name: 'Automotive Body Filler',
    category: 'Auto Refinish',
    tag: 'Professional Grade • Ultra-Smooth Formula',
    image: '/images/card-body-filler.webp',
    shortDesc: 'Smooth, durable and easy to sand body filler solutions for a flawless finish and long-lasting results.',
    fullDesc: 'The industry-standard high-performance body filler engineered specifically for automotive collision repair and refinishing workshops. Delivers an ultra-smooth finish with minimal sanding effort, zero pinholing, and superior vertical stability.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 6 mins | Sandable: 20-30 mins' },
      { label: 'Pot Life', val: '4-6 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2 (Paste to BPO Hardener)' },
      { label: 'Available Sizes', val: '200g, 500g, 1kg, 2kg, 3kg' }
    ],
    benefits: [
      'Lightweight creamy consistency for effortless spreading',
      'Pin-hole free finish reduces secondary spot filling',
      'Zero shrinkage and resistance to sagging on vertical panels',
      'Superior feather-edging without clogging abrasive paper',
      'Excellent grip on bare steel, aluminum, and fiberglass'
    ],
    uses: 'Large panel repair, hood and door leveling, broad surface contouring, commercial vehicle fleet repair.',
    packSizes: ['200g', '500g', '1kg', '2kg', '3kg'],
    badge: 'Best Seller',
    featured: true
  },
  {
    id: 'metal-paste',
    name: 'Metal Paste',
    category: 'Structural Bonding',
    tag: 'Premium Repair • High-Strength Bonding',
    image: '/images/card-metal-paste.webp',
    shortDesc: 'Metal paste solutions for automotive repair, rebuilding and restoring metal surfaces.',
    fullDesc: 'Heavy-duty metallic-reinforced repair compound formulated for rebuilding degraded or corroded metal surfaces, welding seam protection, and deep gouge restoration with exceptional structural strength.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 8 mins | Full Cure: 30-45 mins' },
      { label: 'Pot Life', val: '5 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2 to 100:3 with Hardener' },
      { label: 'Available Sizes', val: '200g, 400g, 1kg, 2kg' }
    ],
    benefits: [
      'Maximum shear and tensile adhesion to bare sheet metal',
      'Exceptional resistance to engine vibration and road flex',
      'Dense non-sag formulation fills deep depressions without slump',
      'Effective barrier against moisture ingress and rust formation',
      'Can be machined, drilled, and tapped after full cure'
    ],
    uses: 'Heavy structural dent repair, rust perforation reconstruction, weld seam sealing, vintage vehicle panel restoration.',
    packSizes: ['200g', '400g', '1kg', '2kg'],
    badge: 'Industrial Grade',
    featured: true
  },
  {
    id: 'surface-finishing-solutions',
    name: 'Surface Finishing Solutions',
    category: 'Surface Preparation',
    tag: 'Polyester Maroon Base • Flawless Glaze',
    image: '/images/card-surface-finishing.webp',
    shortDesc: 'Finishing products for superior surface preparation and professional results.',
    fullDesc: 'Our signature maroon-toned 2-component polyester repair compound engineered to bridge the gap between heavy fillers and final primer surfacers. Provides an ultra-fine grain surface that eliminates sanding scratches and contour imperfections.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 5 mins | Ready to Prime: 20-30 mins' },
      { label: 'Pot Life', val: '4-5 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2 with Hardener' },
      { label: 'Available Sizes', val: '500g, 1kg, 2kg' }
    ],
    benefits: [
      'Butter-like spreadability fills micro-imperfections effortlessly',
      'Distinct maroon contrast aids visual thickness inspection',
      'Fast curing cycle minimizes shop cycle times',
      'Eliminates ghost lines and contour mapping under topcoats',
      'Compatible with all modern automotive solvent and waterborne paint systems'
    ],
    uses: 'Final surface prep, feather-edge blending, micro-scratch leveling, high-end show car body preparation.',
    packSizes: ['500g', '1kg', '2kg'],
    badge: 'Signature Formulation',
    featured: true
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 'aqua-proof-marine-putty',
    name: 'Aqua Proof Marine Putty',
    category: 'Marine Solutions',
    tag: 'Marine Grade • Water Resistant',
    image: '/images/boat_putty.webp',
    shortDesc: 'Marine-grade waterproof structural filler designed specifically for fiberglass, wood, and metal hull repairs.',
    fullDesc: 'Engineered specifically for high-moisture marine environments, Aqua Proof provides an impenetrable barrier against osmotic blistering, saltwater degradation, and dynamic hydraulic pressures.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 10 mins | Full Cure: 45 mins' },
      { label: 'Pot Life', val: '6 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2' },
      { label: 'Available Sizes', val: '500g, 1kg, 2kg' }
    ],
    benefits: [
      '100% waterproof barrier prevents water infiltration',
      'Superior resilience against marine salt spray and UV rays',
      'Strong mechanical bond to fiberglass, gelcoat, and marine plywood',
      'Maintains micro-flexibility under wave impact stress'
    ],
    uses: 'Boat hull repair, deck restoration, marine fiberglass patching, waterline leveling.',
    packSizes: ['500g', '1kg', '2kg'],
    badge: 'Marine Grade'
  },
  {
    id: 'ultra-fill-architectural',
    name: 'Ultra Fill Architectural Paste',
    category: 'Specialty Bonding',
    tag: 'Multi-Surface • Flexible Bonding',
    image: '/images/tiles_wood_paste.webp',
    shortDesc: 'Versatile architectural filler designed for repairing ceramics, tiles, and wooden architectural elements.',
    fullDesc: 'A specialized flexible formulation that accommodates natural thermal expansion and contraction cycles of mixed substrate installations, preventing surface hairline cracking.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 12 mins | Sandable: 40 mins' },
      { label: 'Pot Life', val: '8 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2' },
      { label: 'Available Sizes', val: '400g, 1kg' }
    ],
    benefits: [
      'Adapts to thermal expansion and contraction without detachment',
      'Exceptional adhesion to vitrified tile, granite, and hardwood',
      'Accepts architectural stains, primers, and clear sealants',
      'Non-brittle cured matrix ensures long-term seam stability'
    ],
    uses: 'Architectural wood restoration, tile seam repairing, door frame stabilization, molding repair.',
    packSizes: ['400g', '1kg']
  },
  {
    id: 'precision-spot-putty',
    name: 'Precision Spot Putty (1K)',
    category: 'Surface Preparation',
    tag: 'Precision Repair • Pinhole Filler',
    image: '/images/spot_putty.webp',
    shortDesc: 'Ready-to-use 1K acrylic glaze designed to eliminate micro pinholes and minor sanding scratches.',
    fullDesc: 'Quick-drying, single-component spot repair putty that requires no mixing. Directly applied from the tube or knife to eliminate stone chips, light scratches, and pinholes prior to primer application.',
    specs: [
      { label: 'Dry Time', val: 'Air Dry: 15-20 mins' },
      { label: 'Pot Life', val: 'Direct 1K application' },
      { label: 'Mix Ratio', val: 'Ready to use (No Hardener Required)' },
      { label: 'Available Sizes', val: '200g tube' }
    ],
    benefits: [
      'No mixing required – squeeze and apply immediately',
      'Ultra-fine consistency feathers into surrounding primer flawlessly',
      'Zero bleed-through onto light basecoats',
      'Rapid air drying for rapid cycle touch-ups'
    ],
    uses: 'Stone chip filling, micro pinhole smoothing, fine scratch repair, pre-paint inspection touch-ups.',
    packSizes: ['200g'],
    badge: '1K Ready to Use'
  },
  {
    id: 'airline-lightweight-putty',
    name: 'Airline Ultra-Light Putty',
    category: 'High-Performance',
    tag: 'Aerospace Grade • Ultra-Low Density',
    image: '/images/airline_putty.webp',
    shortDesc: 'Aerospace-grade ultra-low density formulation engineered for weight-critical structural repair.',
    fullDesc: 'Developed for weight-sensitive applications including automotive racing composites, aviation paneling, and carbon-fiber assemblies. Provides supreme surface smoothness with up to 40% less weight than standard fillers.',
    specs: [
      { label: 'Dry Time', val: 'Initial: 6 mins | Sandable: 20 mins' },
      { label: 'Pot Life', val: '4 minutes at 25°C' },
      { label: 'Mix Ratio', val: '100:2' },
      { label: 'Available Sizes', val: '1kg, 2kg' }
    ],
    benefits: [
      'Ultra-low density reduces weight penalty on performance vehicles',
      'Superior thermal tolerance across extreme operating ranges',
      'Vibration damping properties prevent bond-line fatigue',
      'Effortless dry sanding with minimal dust agglomeration'
    ],
    uses: 'Performance motorsport bodywork, aviation composite fairings, carbon-fiber part finishing.',
    packSizes: ['1kg', '2kg'],
    badge: 'Ultra Lightweight'
  }
];
