import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('curatorio_user');
    return stored ? JSON.parse(stored) : null;
  });

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('curatorio_favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const [collections, setCollections] = useState(() => {
    const stored = localStorage.getItem('curatorio_collections');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem('curatorio_user', JSON.stringify(user));
    else localStorage.removeItem('curatorio_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('curatorio_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('curatorio_collections', JSON.stringify(collections));
  }, [collections]);

  function login(email) {
    setUser({ email, name: email.split('@')[0] });
  }

  function signup(name, email) {
    setUser({ email, name });
  }

  function logout() {
    setUser(null);
    setFavorites([]);
    setCollections([]);
    localStorage.removeItem('curatorio_user');
    localStorage.removeItem('curatorio_favorites');
    localStorage.removeItem('curatorio_collections');
  }

  function toggleFavorite(artworkId) {
    setFavorites((prev) =>
      prev.includes(artworkId)
        ? prev.filter((id) => id !== artworkId)
        : [...prev, artworkId]
    );
  }

  function isFavorite(artworkId) {
    return favorites.includes(artworkId);
  }

  function addCollection(name) {
    const col = { id: Date.now(), name, artworkIds: [] };
    setCollections((prev) => [...prev, col]);
    return col.id;
  }

  function deleteCollection(collectionId) {
    setCollections((prev) => prev.filter((c) => c.id !== collectionId));
  }

  function addToCollection(collectionId, artworkId) {
    setCollections((prev) =>
      prev.map((c) =>
        c.id === collectionId && !c.artworkIds.includes(artworkId)
          ? { ...c, artworkIds: [...c.artworkIds, artworkId] }
          : c
      )
    );
  }

  function removeFromCollection(collectionId, artworkId) {
    setCollections((prev) =>
      prev.map((c) =>
        c.id === collectionId
          ? { ...c, artworkIds: c.artworkIds.filter((id) => id !== artworkId) }
          : c
      )
    );
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      favorites,
      toggleFavorite,
      isFavorite,
      collections,
      addCollection,
      deleteCollection,
      addToCollection,
      removeFromCollection,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
