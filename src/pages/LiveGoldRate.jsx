import React, { useState } from "react";

/**
 * GoldCalculator
 * - Net Weight = GrossWeight * 0.97 (3% deduction)
 * - Value = Qty × NetWeight × Rate
 * - Dynamic rows: add / remove
 */

const RATES = {
  24: 12500.0,
  22: 11458.33,
  21: 10937.5,
  20: 10416.67,
  19: 9895.83,
  18: 9445.0,
};

const ITEM_OPTIONS = ["Bangle", "Ring", "Chain", "Necklace", "Custom"];

const format = (n) =>
  typeof n === "number" && isFinite(n)
    ? n.toLocaleString("en-IN", { maximumFractionDigits: 2 })
    : "-";

export default function GoldCalculatorTable() {
  const [rows, setRows] = useState([
    { id: 1, item: "Bangle", qty: 2, carat: 22, gross: 20.0 },
    { id: 2, item: "Ring", qty: 4, carat: 21, gross: 18.0 },
    { id: 3, item: "Chain", qty: 1, carat: 20, gross: 25.0 },
    { id: 4, item: "Necklace", qty: 1, carat: 19, gross: 30.0 },
  ]);

  const ADD_ROW_TEMPLATE = {
    id: Date.now(),
    item: "",
    qty: 1,
    carat: 24,
    gross: "",
    customName: "",
  };

  const updateRow = (id, patch) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const addRow = () =>
    setRows((prev) => [...prev, { ...ADD_ROW_TEMPLATE, id: Date.now() }]);

  const removeRow = (id) => setRows((prev) => prev.filter((r) => r.id !== id));

  const netWeightOf = (gross) => (parseFloat(gross) || 0) * 0.97;
  const rateOf = (carat) => RATES[parseInt(carat)] ?? 0;
  const valueOf = (row) =>
    (row.qty || 1) * netWeightOf(row.gross) * rateOf(row.carat);

  const grandTotal = rows.reduce((sum, r) => sum + valueOf(r), 0);

  return (
    <section className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#1e3a5f] text-xl font-bold">
          Gold Value Calculator
        </h3>
        <div className="text-sm text-[#1e3a5f]">
          Today's base rates applied (fixed list)
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-left">
              {[
                "Item",
                "Qty",
                "Carat",
                "Gross Weight (gm)",
                "Net Weight (gm)",
                "Rate (₹/gm)",
                "Value (₹)",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2 text-sm text-[#1e3a5f] font-semibold border-b">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const gross = parseFloat(row.gross) || 0;
              const netWeight = netWeightOf(gross);
              const rate = rateOf(row.carat);
              const qty = parseFloat(row.qty) || 1;
              const value = qty * netWeight * rate;

              return (
                <tr key={row.id} className="align-top">
                  {/* ITEM DROPDOWN + CUSTOM */}
                  <td className="px-3 py-3 border-b">
                    <select
                      value={row.item}
                      onChange={(e) =>
                        updateRow(row.id, {
                          item: e.target.value,
                          customName: "",
                        })
                      }
                      className="w-40 md:w-56 rounded-md border border-[#D4AF37]/30 px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-[#D4AF37] outline-none">
                      <option value="">Select Item</option>
                      {ITEM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {row.item === "Custom" && (
                      <input
                        value={row.customName}
                        onChange={(e) =>
                          updateRow(row.id, { customName: e.target.value })
                        }
                        placeholder="Enter custom name"
                        className="mt-2 w-40 md:w-56 rounded-md border border-[#D4AF37]/30 px-2 py-1 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      />
                    )}
                  </td>

                  {/* QTY */}
                  <td className="px-3 py-3 border-b">
                    <input
                      type="number"
                      min="1"
                      value={row.qty}
                      onChange={(e) =>
                        updateRow(row.id, { qty: parseFloat(e.target.value) })
                      }
                      className="w-20 rounded-md border border-[#D4AF37]/30 px-2 py-1 text-sm focus:ring-[#D4AF37] focus:ring-2 outline-none"
                    />
                  </td>

                  {/* CARAT */}
                  <td className="px-3 py-3 border-b">
                    <select
                      value={row.carat}
                      onChange={(e) =>
                        updateRow(row.id, { carat: parseInt(e.target.value) })
                      }
                      className="rounded-md border border-[#D4AF37]/30 px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-[#D4AF37] outline-none">
                      {[24, 22, 21, 20, 19, 18].map((c) => (
                        <option key={c} value={c}>
                          {c}K
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* GROSS */}
                  <td className="px-3 py-3 border-b">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={row.gross}
                      onChange={(e) =>
                        updateRow(row.id, { gross: e.target.value })
                      }
                      placeholder="0.00"
                      className="w-28 rounded-md border border-[#D4AF37]/30 px-2 py-1 text-sm focus:ring-[#D4AF37] focus:ring-2 outline-none"
                    />
                  </td>

                  {/* NET WEIGHT */}
                  <td className="px-3 py-3 border-b">
                    <div className="text-sm text-[#1e3a5f] font-medium">
                      {format(netWeight)}
                    </div>
                    <div className="text-xs text-[#1e3a5f] opacity-70">
                      ({format(gross)} × 97%)
                    </div>
                  </td>

                  {/* RATE */}
                  <td className="px-3 py-3 border-b">
                    <div className="text-sm font-semibold text-[#D4AF37]">
                      ₹ {format(rate)}
                    </div>
                  </td>

                  {/* VALUE */}
                  <td className="px-3 py-3 border-b">
                    <div className="text-sm font-bold text-[#1e3a5f]">
                      ₹ {format(value)}
                    </div>
                    <div className="text-xs text-[#1e3a5f] opacity-60">
                      x{qty}
                    </div>
                  </td>

                  {/* REMOVE */}
                  <td className="px-3 py-3 border-b">
                    <button
                      onClick={() => removeRow(row.id)}
                      className="text-sm px-3 py-1 rounded-md border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Controls + Total */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={addRow}
            className="rounded-md bg-[#D4AF37] text-[#1e3a5f] px-4 py-2 font-semibold hover:opacity-90 transition">
            + Add Item
          </button>

          <div className="text-sm text-[#1e3a5f]">
            <span className="font-medium">Note:</span> 3% deduction applied on
            Gross Weight
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-[#1e3a5f]">Net Amount*</div>
          <div className="text-2xl font-extrabold text-[#D4AF37]">
            ₹ {format(grandTotal)}
          </div>
          <div className="text-xs text-[#1e3a5f] opacity-80">
            *Excludes GST / dust charges (hidden for valuation)
          </div>
        </div>
      </div>
    </section>
  );
}
