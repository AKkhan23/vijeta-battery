# Design Prompt — Vijeta Batteries (ready to paste)

> Aap ye poora block kisi bhi naye chat/session me paste kar do. Ye prompt mujhe (agent ko) batata hai ki kaunse skills load karne hain aur design kaunsa quality bar follow karna hai.

---

## PROMPT (copy karein)

```
I want you to work on the Vijeta Batteries website design. Before writing ANY code:

1) Load these skills first (call the skill tool for each, in this order):
   - impeccable          (design direction + quality floor)
   - frontend-design     (distinctive, intentional visual craft)
   - ui-ux-pro-max       (UI/UX patterns, palettes, typography, motion presets)
   - web-design-guidelines (accessibility + best-practice review)
   - motion-doctrine     (read FIRST before composing any motion/animation)
   - find-animation-opportunities / improve-animations / animation-vocabulary
     (only when the task involves motion)
   - hyperframes + code-slice-hero + cuboid-carousel + wireframe-portal-title
     (only for cinematic/video-style effects)

2) Respect the existing design system — do NOT replace it unless I explicitly ask:
   - Palette: paper #f7f7f3, ink #080b14, royal #1436c8, volt #3d6bff, gold #b0853f
   - Fonts: Manrope (display + sans), tight tracking (-0.028em), line-height ~0.99 on headings
   - Motion language: 0.16/1/0.3/1 easing, scroll-linked parallax, torch spotlight cards,
     gloss sweep on highlighted words, reduced-motion support
   - Stack: Next.js 16 App Router, React 19, Tailwind 4, motion/react, lenis, R3F/three

3) Target the section I name. Work inside the EXISTING component file.
   Merge into the current look — preserve copy, content, providers and other sections.
   Take a backup / use git before structural changes.

4) Quality bar (non-negotiable):
   - Finish the job, no placeholders or TODOs
   - Real, production-grade code — no lorem ipsum, no fake data
   - Accessible: keyboard focus, aria labels, prefers-reduced-motion, color contrast
   - Responsive at 375 / 768 / 1440 widths
   - Motion must PERFORM (serve meaning), never idle wobble/decoration for its own sake
   - Verify with `npm run build` and `git diff --stat` before saying done

5) Show me: what you changed, why, and the verification output. Don't claim success without running the build.

Now do this: <WRITE YOUR SPECIFIC TASK HERE, e.g. "make the ProductShowcase cards feel more alive with purposeful motion">
```

---

## Example tasks to put in the last line

- "Audit the home page sections and improve only the motion — keep layout and copy unchanged."
- "Redesign the RangePreview section to feel more premium and cinematic, same content."
- "Add purposeful scroll-linked motion to JourneyTimeline without breaking reduced-motion."
- "Make the About hero typography and spacing editorial-grade; keep the existing palette."
- "Review TechnologyTeaser for accessibility and fix contrast + focus states."

---

## Note (seedhi baat)

- Ye skills **knowledge/workflow** hain — model ko better design banane me madad karti hain.
- "10B free tokens" ya skills install karne se 3D engine / video renderer khud nahi banta.
  Actual 3D/video output ke liye three.js / R3F / ffmpeg / Remotion chahiye — ye project me
  R3F aur three pehle se hai, to 3D sambhav hai; video render alag tool ka kaam hai.
- Skills globally installed hain (`~\.agents\skills`), to wo har naye session me available hain.
  Aapko "skills" bolna zarurat nahi — agent khud relevant skill load karta hai.
