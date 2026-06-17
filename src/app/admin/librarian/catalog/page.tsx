"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Library, Search, Plus, Filter, Book, Edit3, Trash2, Printer
} from "lucide-react";

const mockBooks = [
  { id: "BK-1001", title: "Introduction to Algorithms", author: "Thomas H. Cormen", isbn: "978-0262033848", category: "Computer Science", shelf: "CS-A1", copies: 12, available: 4 },
  { id: "BK-1002", title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", category: "Software Engineering", shelf: "CS-B3", copies: 8, available: 0 },
  { id: "BK-1003", title: "Principles of Physics", author: "David Halliday", isbn: "978-1118230725", category: "Physics", shelf: "PH-C2", copies: 15, available: 12 },
  { id: "BK-1004", title: "Macroeconomics", author: "N. Gregory Mankiw", isbn: "978-1464182891", category: "Economics", shelf: "EC-A4", copies: 5, available: 2 },
  { id: "BK-1005", title: "Organic Chemistry", author: "Paula Yurkanis Bruice", isbn: "978-0134042282", category: "Chemistry", shelf: "CH-D1", copies: 10, available: 8 },
];

export default function BookCatalog() {
  const [search, setSearch] = useState("");

  const filteredBooks = mockBooks.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase()) || 
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.isbn.includes(search)
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Library size={36} className="text-amber-600" />
            Book <span className="text-amber-600">Catalog</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage physical library inventory</p>
        </div>
        <button className="bg-amber-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:bg-amber-700 transition-colors">
          <Plus size={16} /> Add New Book
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Title, Author, or ISBN..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-amber-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Filter size={14} /> Filters
            </button>
            <button className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Printer size={14} /> Print Barcodes
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">ID / ISBN</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Book Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Category / Shelf</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-center">Availability</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredBooks.map((book) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={book.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg inline-block mb-1">{book.id}</p>
                    <p className="text-[10px] font-bold text-slate-500">{book.isbn}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Book size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{book.title}</p>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{book.author}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700">{book.category}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Shelf: {book.shelf}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 max-w-[100px]">
                        <div 
                          className={`h-1.5 rounded-full ${book.available > 0 ? 'bg-amber-500' : 'bg-red-500'}`} 
                          style={{ width: `${(book.available / book.copies) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                        {book.available} <span className="text-slate-400">/ {book.copies}</span>
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
