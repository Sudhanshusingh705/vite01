import  { useState } from "react";
import "./Vocationalcourse.css";
import "./Sidebarmenu.css";

const Vocationalcourses = () => {
  const sectionData = [
    {
      id: "section1",
      title: "Section 1",
      cards: [
        {
          title: "IIM Bangalore - Indian Institute of Management",
          imageUrl: "https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch",
          logoUrl: "https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch",
          location: "Bangalore, Karnataka",
          ranking: "Ranked 1 out of 50 Financial Express",
          rating: "9.2/10",
          reviews: "74 reviews",
          totalFees: "24.50 Lacs",
          course: "MBA/PGDM",
        },
        {
          title: "IIM Bangalore - Indian Institute of Management",
          imageUrl: "https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch",
          logoUrl: "https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch",
          location: "Bangalore, Karnataka",
          ranking: "Ranked 1 out of 50 Financial Express",
          rating: "9.2/10",
          reviews: "74 reviews",
          totalFees: "24.50 Lacs",
          course: "MBA/PGDM",
        },
      ],
    },
    {
      id: "section2",
      title: "Section 2",
      cards: [
        // ... cards for section 2
      ],
    },
    {
      id: "section3",
      title: "Section 3",
      cards: [
        // ... cards for section 3
      ],
    },
    // Add other sections here
  ];

  const [activeSection, setActiveSection] = useState("");

  const toggleContent = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection("");
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}>
        Top Vocational Courses Colleges in India 2023
      </h2>
      <div className="container p-3 my-3 border border-dark">
        <div className="row">
          <nav className="col-sm-3 col-4" id="myScrollspy">
            <ul className="nav nav-pills flex-column">
              {sectionData.map((section) => (
                <li key={section.id} className="nav-item">
                  <a
                    className={`nav-link ${activeSection === section.id ? "active" : ""}`}
                    onClick={() => toggleContent(section.id)}
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-sm-9 col-8">
            {sectionData.map((section) =>
              activeSection === section.id ? (
                <div key={section.id} id={section.id}>
                  {section.cards.map((card) => (
                    <div key={card.title} className="card">
                      <img src={card.imageUrl} alt={card.title} />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">Location: {card.location}</p>
                        <p className="card-text">Ranking: {card.ranking}</p>
                        <p className="card-text">Rating: {card.rating}</p>
                        <p className="card-text">Reviews: {card.reviews}</p>
                        <p className="card-text">Total Fees: {card.totalFees}</p>
                        <p className="card-text">Course: {card.course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocationalcourses;
