export interface ResourceLink {
  title: string;
  href: string;
  note?: string;
}

export interface ResourceCategory {
  label: string;
  items: ResourceLink[];
}

export interface ResourceSubject {
  slug: string;
  title: string;
  categories: ResourceCategory[];
}

export const resourceSubjects: ResourceSubject[] = [
  {
    slug: "quantum-mechanics",
    title: "Quantum Mechanics",
    categories: [
      {
        label: "Reddit",
        items: [
          {
            title: "Reddit QUANTUM WIKKI",
            href: "https://www.reddit.com/r/QuantumPhysics/wiki/index/#wiki_introductory_books.2Fcourses.3F",
          },
        ],
      },
      {
        label: "Courses / Playlists",
        items: [
          {
            title: "Quantum Mechanics Zero to Hero Physics",
            href: "https://youtube.com/playlist?list=PL68sZ4zIDsSxYQfaLWsnVkGhutt7S_38o&si=5k2z64lv1t5cPfH-",
          },
          {
            title: "MIT 8.04 Quantum Physics I, Spring 2013 (2013)",
            href: "https://youtube.com/playlist?list=PLUl4u3cNGP61-9PEhRognw5vryrSEVLPr&si=AhpfVi9nAeVHF-R9",
          },
          {
            title: "Quantum Field Theory (University of Cambridge)",
            href: "https://youtube.com/playlist?list=PLGqzsq0erqU4nc3E6Ot1bhSYkAUL6xe9u&si=ozVa215na8Wxzous",
          },
          {
            title: "Quantum Field Theory by Tobias Osborne",
            href: "https://youtube.com/playlist?list=PLDfPUNusx1EpRs-wku83aqYSKfR5fFmfS&si=9xdKkAzvK0tulVGF",
          },
          {
            title: "Course: Quantum Field Theory I — Prof. Ricardo D. Matheus",
            href: "https://youtube.com/playlist?list=PL5-Gs_CjccK48Y__sTBOGU9yW9YeUw-l5&si=nNBa6EJnGpRBj2us",
          },
          {
            title: "Course: Quantum Field Theory I — Prof. Horatiu Nastase",
            href: "https://youtube.com/playlist?list=PL5-Gs_CjccK7-967BNLb7G-2UKpDXGIi_&si=PKyAwDZz9-qiK84N",
          },
          {
            title: "Course: Quantum Field Theory II — Prof. Horatiu Nastase",
            href: "https://youtube.com/playlist?list=PL5-Gs_CjccK7yhuS67UwbbaRtVVS2PeAk&si=ifFzz3EsRoM_4v3R",
          },
          {
            title:
              "Course: Quantum — Sivakumar Rajagopalan, PhD Physics (IIT Madras)",
            href: "https://youtu.be/pfYdDIePPhc?si=TpQ-yJt_mimO1oi2",
          },
        ],
      },
      {
        label: "Websites / Docs",
        items: [
          {
            title: "David Tong — Introduction to QM",
            href: "https://davidtong.org/teaching/quantum-mechanics/",
          },
          {
            title: "QuTiP documentation",
            href: "https://qutip.readthedocs.io/",
          },
        ],
      },
    ],
  },
  {
    slug: "calculus",
    title: "Calculus",
    categories: [
      {
        label: "Videos",
        items: [
          {
            title: "3Blue1Brown — Essence of Calculus",
            href: "https://www.youtube.com/results?search_query=3blue1brown+essence+of+calculus",
          },
          {
            title: "Professor Leonard — Calculus 1",
            href: "https://www.youtube.com/professorleonard",
          },
          {
            title: "Professor Leonard — Calculus 2",
            href: "https://www.youtube.com/professorleonard",
          },
          {
            title: "Professor Leonard — Calculus 3",
            href: "https://www.youtube.com/professorleonard",
          },
        ],
      },
      {
        label: "Courses / Playlists",
        items: [
          {
            title: "Khan Academy — Multivariable Calculus",
            href: "https://www.khanacademy.org/math/multivariable-calculus",
          },
        ],
      },
      {
        label: "Websites / Docs",
        items: [
          {
            title: "Overleaf — Learn LaTeX in 30 minutes",
            href: "https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes",
            note: "For typing up notes.",
          },
        ],
      },
    ],
  },
  {
    slug: "linear-algebra",
    title: "Linear Algebra",
    categories: [
      {
        label: "Videos",
        items: [
          {
            title: "3Blue1Brown — Essence of Linear Algebra",
            href: "https://www.youtube.com/results?search_query=3blue1brown+essence+of+linear+algebra",
          },
        ],
      },
    ],
  },
  {
    slug: "differential-equations",
    title: "Differential Equations (ODE / PDE)",
    categories: [
      {
        label: "Videos",
        items: [
          {
            title: "Strang & Moler — Learn Differential Equations",
            href: "https://www.youtube.com/results?search_query=learn+differential+equations+strang+moler",
          },
        ],
      },
      {
        label: "Courses / Playlists",
        items: [
          {
            title: "MIT OCW 18.03 — Differential Equations",
            href: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
          },
          {
            title: "MIT OCW 18.152 — Intro to Partial Differential Equations",
            href: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/",
          },
        ],
      },
    ],
  },
  {
    slug: "electromagnetism",
    title: "Electromagnetism",
    categories: [
      {
        label: "Courses / Playlists",
        items: [
          {
            title: "MIT OCW 8.02 — Electricity & Magnetism",
            href: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/",
          },
        ],
      },
    ],
  },
  {
    slug: "coding-tools",
    title: "Coding / Tools",
    categories: [
      {
        label: "Websites / Docs",
        items: [
          {
            title: "NumPy quickstart",
            href: "https://numpy.org/doc/stable/user/quickstart.html",
          },
          {
            title: "SciPy tutorial",
            href: "https://docs.scipy.org/doc/scipy/tutorial/index.html",
          },
          {
            title: "QuTiP documentation",
            href: "https://qutip.readthedocs.io/",
          },
          {
            title: "Overleaf — Learn LaTeX in 30 minutes",
            href: "https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes",
          },
        ],
      },
    ],
  },
];

export function getResourceSubject(slug: string): ResourceSubject | undefined {
  return resourceSubjects.find((subject) => subject.slug === slug);
}
