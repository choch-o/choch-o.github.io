/**
 * Created by chocho on 11/6/19.
 */
let newsData = {
  "news": [
    {
      "date": "Apr 2025",
      "text": "👩🏻‍🏫 Presenting <i>Persistent Assistant</i> at CHI 2025 in <a href='https://programs.sigchi.org/chi/2025/program/session/195002' target='_blank'>Agent Design</a> session on Wed, April 30"
    },
    {
      "date": "Apr 2025",
      "text": "✈️ Attending CHI 2025 in Yokohama, Japan (April 26 - May 1)"
    },
    {
      "date": "Mar 2025",
      "text": "👩🏻‍🏫 Paper presentation (Audiovisual XR Notifications) at IEEE VR 2025"
    },
    {
      "date": "Mar 2025",
      "text": "✈️ Attending IEEE VR 2025 in Saint-Malo, France (March 10 - 13)"
    },
    {
      "date": "Feb 2025",
      "text": "👩🏻‍🏫 Guest lecture in Alexandra Ion's *Computational Methods for Interactive Systems* class at Carnegie Mellon University"
    },
    {
      "date": "Jan 2025",
      "text": "👩🏻‍🏫 Invited talk at Seoul National University (SNU), hosted by Youngki Lee"
    },
    {
      "date": "Dec 2024",
      "text": "👩🏻‍🏫 Invited talk at KAIST, hosted by Juho Kim"
    },
    {
      "date": "Nov 2024",
      "text": "👩🏻‍🏫 Guest lecture in Michael Nebeling's *Introduction to AR/VR Application Design* class at University of Michigan"
    },
    {
      "date": "Nov 2024",
      "text": "👩🏻‍🏫 Guest lecture in Yukang Yan's *Introduction to Human-Computer Interaction* class at University of Rochester"
    },
    {
      "date": "Oct 2024",
      "text": "🤝 Serving as Registration Co-chair for UIST 2025 in Busan, South Korea 🇰🇷"
    },
    {
      "date": "Oct 2024",
      "text": "👩🏻‍🏫 Research talk about Auptimize at CMU VASC Seminar"
    },
    {
      "date": "Oct 2024",
      "text": "👩🏻‍🏫 Two paper presentations (Auptimize and SonoHaptics) at UIST 2024"
    },
    {
      "date": "Oct 2024",
      "text": "🏡 Attending UIST 2024 in Pittsburgh, USA 🌉"
    },
    {
      "date": "May 2024",
      "text": "👩🏻‍💻 Research Scientist Intern at Meta Reality Labs, Redmond, USA (May - Sep)"
    },
    {
      "date": "May 2024",
      "text": "👩🏻‍🏫 Paper presentation (MineXR) at CHI 2024"
    },
    {
      "date": "May 2024",
      "text": "✈️ Attending CHI 2024 in Honolulu, Hawaii (May 10 - 17)"
    },
    {
      "date": "Nov 2023",
      "text": "🏆 BlendMR won the Best Paper Award at ACM ISS 2023!"
    },
    {
      "date": "Oct 2023",
      "text": "👩🏻‍🏫 Paper presentation (RealityReplay) at UbiComp 2023"
    },
    {
      "date": "Oct 2023",
      "text": "✈️ Attending UbiComp 2023 in Cancún, Mexico (Oct 8 - 13)"
    },
    {
      "date": "Sep 2023",
      "text": "✈️ 10th Heidelberg Laureate Forum, Heidelberg, Germany (Sep 23 - 30)"
    },
    {
      "date": "May 2023",
      "text": "👩🏻‍💻 Research Scientist Intern at Meta Reality Labs, Redmond, USA (May - Sep)"
    },
    {
      "date": "Oct 2022",
      "text": "✈️ UIST 2022 @ Bend, Oregon, USA (Oct 29 - Nov 4) 🎃"
    },
    {
      "date": "Sep 2022",
      "text": "👩🏻‍🏫 Paper presentation (FLAME) at UbiComp 2022"
    },
    {
      "date": "Sep 2022",
      "text": "✈️ UbiComp 2022 @ Cambridge, UK (Sep 11 - Sep 15)"
    },
    {
      "date": "Jun 2022",
      "text": "✈️ Summer School on Computational Interaction @ Saarbrücken, Germany (Jun 13 - 18)"
    },
    {
      "date": "Apr 2022",
      "text": "✈️ CHI 2022 @ New Orleans, LA (Apr 29 - May 7)"
    },
    {
      "date": "Nov 2021",
      "text": "👩🏻‍🏫 Presentation at AIChallengeIoT workshop @ ACM SenSys 2021"
    },
    {
      "date": "Oct 2021",
      "text": "🏆 CSCW 2021 Best Paper Award & Methods Recognition"
    },
    {
      "date": "Oct 2021",
      "text": "👩🏻‍🏫 Paper presentation (Finesse) at CSCW 2021"
    },
    {
      "date": "Oct 2021",
      "text": "👩🏻‍🔧 Student volunteer at UIST 2021"
    },
    {
      "date": "Aug 2021",
      "text": "📍 Moved to Pittsburgh, PA for my PhD at CMU"
    },
    {
      "date": "Aug 2021",
      "text": "🏆 Bell Labs Summer Intern Award for Outstanding Innovation"
    },
    // {
    //   "date": "Jul 2021",
    //   "text": "🗞 Paper accepted to ACM CSCW 2021"
    // },
    {
      "date": "May 2021",
      "text": "👩🏻‍💻 Starting my internship at Nokia Bell Labs, Cambridge, UK"
    },
    {
      "date": "Jan 2021",
      "text": "👩🏻‍🏫 Presentation at HCI Korea 2021 Positive Computing Workshop"
    },
    {
      "date": "Dec 2020",
      "text": "👩🏻‍🏫 SIGCHI CSCW Asia Winter School (AWS) 2020 on Dec 18-19"
    },
    {
      "date": "Nov 2020",
      "text": "🏆 NAVER Ph.D. Fellowship Award"
    },
    {
      "date": "Oct 2020",
      "text": "👩🏻‍🏫 Paper presentation & demo (MyButler) at CSCW 2020"

    },
    {
      "date": "Aug 2020",
      "text": "👩🏻‍🏫 Presentation at 2020 HCI@KAIST " +
          "Summer Workshop",
    },
    // {
    //   "date": "Mar 2020",
    //   "text": "🗞 Paper accepted to ACM CSCW 2020"
    // },
    {
      "date": "Feb 2020",
      "text": "👩🏻‍🎓 Officially a Master in Computer Science"
    },
    {
      "date": "Sep 2019",
      "text": "🏆 Best TA Award of KAIST CS for _CS341: Intro to Networking_"
    },
    {
      "date": "Aug 2019",
      "text": "✈️ Google WTM Scholars Retreat (Aug 27-Sep 1) in Sydney, Australia",
    },
    {
      "date": "Aug 2019",
      "text": "👩🏻‍🏫 Presentation at 2019 HCI@KAIST Summer Workshop",
    },
    {
      "date": "Jul 2019",
      "text": "🏆 Google Women Techmakers (WTM) Scholar 2019"
    }
    // {
    //   "date": "Jul 2019",
    //   "text": "🗞 Paper accepted to ACM IMWUT (UbiComp) 2019"
    // }
  ],
};

export { newsData };