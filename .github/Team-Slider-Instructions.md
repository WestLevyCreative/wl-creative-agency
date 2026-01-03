Okay, this is a comprehensive prompt designed to give a Next.js developer or an AI coding tool all the necessary details to build this sophisticated team slider.

I'll break it down into sections:

---

### Fully Descriptive Next.js Team Slider Prompt

**High-Level Overview:**
"Develop a responsive `TeamSlider` component for a Next.js 14+ application (App Router). The slider will be a Client Component using Tailwind CSS for styling and Framer Motion for animations and interactive elements. It presents team members with a unique visual design for their profile cards."

---

**I. Core Structure and Layout:**

1. **Container:**
* Full-width section with a `bg-black` background.
* On desktop (above `lg` breakpoint), use a `grid grid-cols-[30%_70%]` layout or a `flex` layout where the left section is `w-1/3` and the right is `w-2/3`.
* On mobile (`lg` breakpoint and below), the layout should stack vertically, with the static text block above the horizontal slider.


2. **Left Section (Static Content):**
* **Heading:** "OUR TEAM"
* "OUR" in `text-white`
* "TEAM" in `text-[#00cccc]` (Teal)
* Use a large, bold, sans-serif font (e.g., `font-extrabold text-5xl` or similar).


* **Body Text:** A short descriptive paragraph about the team (e.g., "Meet the innovators, strategists, and dreamers..."). Use `text-gray-300` and a standard sans-serif font.
* **Action Button:** A pill-shaped button below the text.
* Text: "Move Mountains"
* Icon: Right-pointing arrow (e.g., `lucide-react` or similar icon library).
* Styling: `bg-[#00cccc]` on hover, `text-white`, `rounded-full`, `px-6 py-3`.


* **Vertical Dots/Indicators:** Include a series of small, vertically aligned teal dots as a decorative element, visually connecting to the slider below.


3. **Right Section (Slider Container):**
* This will contain the horizontal carousel of `TeamCard` components.
* Ensure it has `overflow-x-scroll` and `scrollbar-hide` for a clean look, or use a dedicated slider library that manages this.
* Implement **Framer Motion's `useScroll` and `useTransform**` for parallax effects, or **`motion.div` with `drag="x"**` for custom dragging behavior that snaps to cards.
* Alternatively, integrate a dedicated headless slider library like **Embla Carousel React** for robust touch and snap functionality.



---

**II. `TeamCard` Component Details:**

1. **Component Signature:**
* `TeamCard({ name, role, imageSrc, profileLink })`


2. **Overall Card Layout:**
* Each card is a tall, vertical rectangle with a `relative` position for internal element placement.
* `w-[300px]` (or similar fixed width to ensure consistent card size in the slider) and appropriate `h-[400px]` (or similar aspect ratio like 4:5 or 3:4).
* Apply `whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}` using Framer Motion.


3. **Vertical Text (Left of Image):**
* `div` containing `name` and `role`.
* Styling:
* `absolute`, `left-0`, `top-1/2`, `transform -translate-y-1/2 rotate-180 origin-top-left` (or `writing-mode: vertical-lr` then rotate `rotate-180` for consistency across browsers).
* `text-white` for `name` (bold, larger font).
* `text-[#00cccc]` for `role` (smaller font).
* Ensure sufficient `z-index` to overlap the image slightly.




4. **Image (`next/image`):**
* Use `next/image` for optimized loading and responsiveness.
* `src={imageSrc}`, `alt={name}`, `layout="fill"` or `objectFit="cover"`.
* **Crucial Custom Corner Cutout:**
* This effect is created by layering. The image itself will be a standard rectangle.
* **Option 1 (CSS `clip-path` - most robust):** Apply a `clip-path` on the `img` element. Example: `clip-path: polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%);` (Adjust `80px` for cutout size).
* **Option 2 (Pseudo-element with `border-radius` and `overflow` - simpler Tailwind):**
* Wrap the image in a `div` that handles the main dimensions and `overflow-hidden`.
* Create a pseudo-element (`:after` or a nested `div`) in the bottom-right that is `bg-black` (matching container background).
* Give this pseudo-element a `border-top-left-radius` of `full` and position it precisely to create the illusion of a concave cutout. This requires careful `absolute` positioning and `z-index`.






5. **Interactive "Info" Icon with Tooltip/Popover:**
* **Icon:** A circular button, `absolute` positioned within the custom cutout area of the card.
* Use a modern info icon (e.g., `info` from `lucide-react`).
* Styling: `w-10 h-10`, `bg-[#00cccc]`, `rounded-full`, `flex items-center justify-center`, `text-white`.


* **Hover Effect (Tooltip/Popover):**
* When hovering over the info icon, a small popover/tooltip should appear *above* it.
* **Tooltip Content:**
* **Title:** "See The Full Story" (bold, `text-white`).
* **Button:** "View Profile" (`<Link href={profileLink}>`).
* Styling: `bg-white`, `text-black`, `rounded-md`, `px-3 py-1`, `text-sm`.




* **Tooltip Styling:** `bg-gray-800`, `text-white`, `p-3`, `rounded-lg`, `absolute`, `bottom-[calc(100%+10px)]` (to position above), `left-1/2`, `transform -translate-x-1/2`, `whitespace-nowrap`, `z-50`.
* Implement with a React state (e.g., `useState` for `isHovered`) to conditionally render the tooltip, or use a headless UI library like `headlessui` for more complex popover logic.





---

**III. Slider Pagination:**

1. **Placement:** Small `div` with `flex justify-center items-center` below the slider (or integrated into the main static left section for desktop).
2. **Dots:**
* A series of small, circular elements.
* Inactive dot: `bg-gray-700`, `w-2 h-2`, `rounded-full`.
* Active dot: `bg-[#00cccc]`, `w-2 h-2`, `rounded-full`.
* Transition between active/inactive dots when the slide changes.



---

**IV. Responsiveness:**

* **Mobile (smaller than `lg`):**
* Stack the left static content (`text-center`) above the slider.
* Adjust font sizes and spacing (`padding`, `margin`) to fit smaller screens.
* Ensure the slider cards remain appropriately sized and scrollable.
* The vertical text on cards might need adjustments or even be re-oriented horizontally if it's too cramped.


* **Desktop (`lg` and up):**
* Maintain the split-screen layout.



---

**V. Tailwind CSS Custom Utility for Cutout (Option 2):**

For the custom corner cutout, if not using `clip-path`, here's how you could create a utility using a pseudo-element. This is more advanced Tailwind and might require extending your `tailwind.config.js`.

**Method using a nested div and `overflow-hidden`:**

```html
<div class="relative w-[300px] h-[400px] overflow-hidden rounded-lg">
  {/* The main image */}
  <img src="..." alt="..." class="w-full h-full object-cover" />

  {/* The cutout simulation - positioned and rounded */}
  <div class="absolute bottom-0 right-0 w-20 h-20 bg-black rounded-tl-full"></div> 
  {/* The 'info' icon button */}
  <button class="absolute bottom-2 right-2 w-10 h-10 bg-[#00cccc] rounded-full flex items-center justify-center z-10">
    {/* Info Icon */}
    <svg ... />
    {/* Tooltip */}
    <div class="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-gray-800 text-white p-3 rounded-lg whitespace-nowrap hidden group-hover:block">
      <h3 class="font-bold">See The Full Story</h3>
      <Link href="/profile" class="mt-2 block bg-white text-black text-sm px-3 py-1 rounded-md">View Profile</Link>
    </div>
  </button>
</div>

```

*(Note: The `group-hover` class would be applied to the parent `button` or even the entire card to control the tooltip's visibility.)*

**Explanation of the cutout div:**
The `absolute bottom-0 right-0 w-20 h-20 bg-black rounded-tl-full` div is positioned at the bottom-right. Its `background-color` is set to `bg-black` to blend with the container. The `rounded-tl-full` makes its *top-left* corner rounded, which when seen against the main image (which is *under* it), creates the illusion of the image having a concave cutout. You would then need to ensure your info button is `z-10` to sit *above* this cutout div.

---