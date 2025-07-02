import { useEffect, useState } from "react";
import api from "../lib/axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState(null);

  useEffect(() => {
    const veriGetir = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (err) {
        setHata("Veri alınamadı. "+{err});
      } finally {
        setYukleniyor(false);
      }
    };

    veriGetir();
  }, []);

  if (yukleniyor) return <p>Yükleniyor...</p>;
  if (hata) return <p>{hata}</p>;

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ul style={{listStyleType:"none"}}>
        {users.map((kisi) => (
          <li key={kisi.id}>
            {kisi.name} – {kisi.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
