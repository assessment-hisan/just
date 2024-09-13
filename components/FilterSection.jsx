


function FilterSection() {
//   const [sections, setSections] = useState([]);
//   const [categories, setCategories] = useState(["Stage", "Non-Stage"]);
//   const [types, setTypes] = useState(["Individual", "Group"]);
//   const [selectedSection, setSelectedSection] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [programs, setPrograms] = useState([]);

//   useEffect(() => {
//     // Fetch sections or use static data
//     setSections(["Primary", "Secondary"]);
//   }, []);

//   useEffect(() => {
//     // Fetch programs based on filters
//     axios.get('/api/programs', {
//       params: {
//         section: selectedSection,
//         category: selectedCategory,
//         type: selectedType,
//         search: searchTerm
//       }
//     })
//     .then(response => setPrograms(response.data))
//     .catch(error => console.error("There was an error fetching the programs!", error));
//   }, [selectedSection, selectedCategory, selectedType, searchTerm]);

  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7fafc",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#4a5568",
            }}
          >
            Filter Programs
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <select
              style={{
                flex: "1 1 30%",
                padding: "0.5rem",
                border: "1px solid #d2d6dc",
                borderRadius: "0.375rem",
                backgroundColor: "#edf2f7",
                color: "#2d3748",
              }}
            >
              <option value="">Select Section</option>
            </select>
            <select
              style={{
                flex: "1 1 30%",
                padding: "0.5rem",
                border: "1px solid #d2d6dc",
                borderRadius: "0.375rem",
                backgroundColor: "#edf2f7",
                color: "#2d3748",
              }}
            >
              <option value="">Select Category</option>
            </select>
            <select
              style={{
                flex: "1 1 30%",
                padding: "0.5rem",
                border: "1px solid #d2d6dc",
                borderRadius: "0.375rem",
                backgroundColor: "#edf2f7",
                color: "#2d3748",
              }}
            >
              <option value="">Select Type</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search by Program Name"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #d2d6dc",
              borderRadius: "0.375rem",
              marginBottom: "1rem",
            }}
          />
          <ul
            style={{ marginTop: "1rem", listStyleType: "none", padding: "0" }}
          >
            <li
              style={{
                backgroundColor: "#e2e8f0",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            ></li>
          </ul>
        </div>
      </div>
  );
}

export default FilterSection;
