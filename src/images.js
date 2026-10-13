// All images come from Unsplash. Each has a fallback if the remote image fails.
const u = (id, w) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
  hero: u("1523741543316-beb7fc7023d8", 1920), // green hills and crop rows
  iot: u("1625246333195-78d9c38ad449", 700), // young maize in the field
  phone: u("1592286927505-1def25115558", 700), // smartphone among green leaves
  farmers: u("1605000797499-95a51c5269ae", 1000), // farmers working in a field
  landscape: u("1560493676-04071c5f467b", 1000), // rows of crops, rural landscape
  seedlings: u("1530836369250-ef72a3f5cda8", 900), // hands tending seedlings
};

// Inline SVG used if an image fails to load, so there are never broken icons.
export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#a7d7a9'/><stop offset='1' stop-color='#2f8f4e'/>
      </linearGradient></defs>
      <rect width='800' height='600' fill='url(#g)'/>
      <path d='M400 170c70 36 104 96 82 166-17 46-52 72-82 96-30-24-65-50-82-96-22-70 12-130 82-166z' fill='rgba(255,255,255,.55)'/>
    </svg>`
  );
