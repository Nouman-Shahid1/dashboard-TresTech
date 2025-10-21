"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [userDocuments, setUserDocuments] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('userDocuments');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setUserDocuments(parsed);
        } catch (e) {
          console.error('Error loading documents:', e);
        }
      }
    }
  }, []);

  const addDocument = (userId, fileData) => {
    const newDocs = {
      ...userDocuments,
      [userId]: [...(userDocuments[userId] || []), fileData]
    };
    setUserDocuments(newDocs);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userDocuments', JSON.stringify(newDocs));
    }
  };

  const getUserDocuments = (userId) => {
    return userDocuments[userId] || [];
  };

  const deleteDocument = (userId, documentId) => {
    const newDocs = {
      ...userDocuments,
      [userId]: (userDocuments[userId] || []).filter(doc => doc.id !== documentId)
    };
    setUserDocuments(newDocs);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userDocuments', JSON.stringify(newDocs));
    }
  };

  return (
    <DocumentContext.Provider value={{
      userDocuments,
      addDocument,
      getUserDocuments,
      deleteDocument
    }}>
      {children}
    </DocumentContext.Provider>
  );
}

export const useDocuments = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocuments must be used within a DocumentProvider');
  }
  return context;
};