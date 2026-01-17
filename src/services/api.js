export const fetchRestaurants = async () => {
  const gasUrl = import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL;

  if (!gasUrl) {
    console.error("GOOGLE_APP_SCRIPT_URL is not defined");
    // During development without backend, return mock data? 
    // Or just throw error.
    // For now, let's return a mock if url is missing to prevent crash during initial dev
    return getMockData();
  }

  try {
    const response = await fetch(gasUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Fallback to mock data or rethrow
    return [];
  }
};

const getMockData = () => {
  return [
    {
      id: 1,
      name: "Mock Restaurant A",
      price: "$200-400",
      time: "11:00-20:00",
      mapUrl: "https://maps.google.com",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      tags: "台式",
      rating: 4.7
    },
    {
      id: 2,
      name: "Mock Restaurant B",
      price: "$100-300",
      time: "10:00-22:00",
      mapUrl: "https://maps.google.com",
      imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
      tags: "日式",
      rating: 4.5
    }
  ];
}
