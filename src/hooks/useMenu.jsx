import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/menu`).then((response) => {
      setMenuItems(response.data);
      setLoading(false);
    });
  }, []);
  return [menuItems, loading];
};

export default useMenu;
