import React from 'react';
import katex from 'katex';

const SolutionRenderer = ({ direction,error, order, x, h, rResult, rDifff, rError}) => {
  const renderContent = () => {
    if (direction === "Forward") {
        if(error === "h"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=(f(x_{i+1}) - f(x_{i}))}{h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=(f(${x}+${h}) - f(${x}))}{${h}} = ${rResult}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=(f(x_{i+2}) - 2f(x_{i+1}) + f(x_{i}))}{h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=(f(${x}+${h}+${h}) - 2f(${x}+${h}) + f(${x}))}{${h}^{2}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=(f(x_{i+3}) - 3f(x_{i+2}) + 3f(x_{i+1}) - f(x_{i}))}{h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=(f(${x}+${h}+${h}+${h}) - 3f(${x}+${h}+${h}) + 3f(${x}+${h}) - f(${x}))}{${h}^{3}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=(f(x_{i+4}) - 4f(x_{i+3}) + 6f(x_{i+2}) - 4f(x_{i+1}) +f(x_{i}))}{h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=(f(${x}+${h}+${h}+${h}+${h}) - 4f(${x}+${h}+${h}+${h}) + 6f(${x}+${h}+${h}) - 4f(${x}+${h}) +f(${x}))}{${h}^{4}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
        if(error === "h2"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=[-f(x_{i+2}) + 4f(x_{i+1}) - 3f(x_{i})]}{2h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=[-f(${x} + ${h} + ${h}) + 4f(${x} + ${h}) - 3f(${x})]}{2(${h})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=[-f(x_{i+3}) + 4f(x_{i+2}) - 5f(x_{i+1}) +2f(x_{i})]}{h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=[-f(${x}+${h}+${h}+${h}) + 4f(${x}+${h}+${h}) - 5f(${x}+${h}) +2f(${x})]}{${h}^{2}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=[-3f(x_{i+4}) + 14f(x_{i+3}) - 24f(x_{i+2}) + 18(x_{i+1}) - 5f(x_{i})]}{2h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=[-3f(${x}+${h}+${h}+${h}+${h}) + 14f(${x}+${h}+${h}+${h}) - 24f(${x}+${h}+${h}) + 18(${x}+${h}) - 5f(${x})]}{2(${h})^{3}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=[-2f(x_{i+5}) + 11f(x_{i+4}) - 24f(x_{i+3}) + 26f(x_{i+2}) -14f(x_{i+1}) + 3f(x_{i})]}{h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=[-2f(${x}+${h}+${h}+${h}+${h}+${h}) + 11f(${x}+${h}+${h}+${h}+${h}) - 24f(${x}+${h}+${h}+${h}) + 26f(${x}+${h}+${h}) -14f(${x}+${h}) + 3f(${x})]}{${h}^{4}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
    }
    if(direction === "Backward"){
        if(error === "h"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=(f(x_{i}) - f(x_{i+1}))}{h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=(f(${x}) - f(${x}+${h}))}{${h}} = ${rResult}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=(f(x_{i}) - 2f(x_{i-1}) + f(x_{i-2}))}{h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=(f(${x}) - 2f(${x}-${h}) + f(${x}-${h}-${h}))}{${h}^{2}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=(f(x_{i}) - 3f(x_{i-1}) + 3f(x_{i-2}) - f(x_{i-3}))}{h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=(f(${x}) - 3f(${x}-${h}) + 3f(${x}-${h}-${h}) - f(${x}-${h}-${h}-${h}))}{${h}^{3}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=(f(x_{i}) - 4f(x_{i-1}) + 6f(x_{i-2}) - 4f(x_{i-3}) +f(x_{i-4}))}{h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=(f(${x}) - 4f(${x}-${h}) + 6f(${x}-${h}-${h}) - 4f(${x}-${h}-${h}-${h}) +f(${x}-${h}-${h}-${h}-${h}))}{${h}^{4}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
        if(error === "h2"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=[3f(x_{i}) -4f(x_{i-1}) + f(x_{i-2})]}{2h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=[3f(${x}) -4f(${x}-${h}) + f(${x}-${h}-${h})]}{2(${h})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=[2f(x_{i}) - 5f(x_{i-1}) + 4f(x_{i-2}) - f(x_{x-3}))]}{h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=[2f(${x}) - 5f(${x}-${h}) + 4f(${x}-${h}-${h}) - f(${x}-${h}-${h}-${h}))]}{${h}^{2}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=[5f(x_{i}) - 18f(x_{i-1}) + 24f(x_{i-2}) -14f(x_{i-3}) - f(x_{i-4}) ]}{2h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=[5f(${x}) - 18f(${x}-${h}) + 24f(${x}-${h}-${h}) -14f(${x}-${h}-${h}-${h}) - f(${x}-${h}-${h}-${h}-${h}) ]}{2(${h})^{3}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=[3f(x_{i}) - 14f(x_{i-1}) + 26f(x_{i-2}) -24f(x_{i-3}) + 11f(x_{i-4}) -2f(x_{i-5})]}{h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=[3f(${x}) - 14f(${x}-${h}) + 26f(${x}-${h}-${h}) -24f(${x}-${h}-${h}-${h}) + 11f(${x}-${h}-${h}-${h}-${h}) -2f(${x}-${h}-${h}-${h}-${h}-${h})]}{${h}^{4}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
    }
    if(direction === "Centered"){
        if(error === "h2"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=(f(x_{i+1}) - f(x_{i-1}))}{2h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=(f(${x}+${h}) - f(${x}-${h}))}{2(${h})} = ${rResult}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=(f(x_{i+1}) - 2f(x_{i}) + f(x_{i-1}))}{h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=(f(${x}+${h}) - 2f(${x}) + f(${x}-${h}))}{${h}^{2}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=(f(x_{i+2}) - 2f(x_{i+1}) + 2f(x_{i-1}) - f(x_{i-2}))}{2h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=(f(${x}+${h}+${h}) - 2f(${x}+${h}) + 2f(${x}-${h}) - f(${x}-${h}-${h}))}{2(${h}^{3})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=(f(x_{i+2}) - 4f(x_{i+1}) + 6f(x_{i}) - 4f(x_{i-1}) +f(x_{i-2}))}{h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=(f(${x}+${h}+${h}) - 4f(${x}+${h}) + 6f(${x}) - 4f(${x}-${h}) +f(${x}-${h}-${h}))}{${h}^{4}}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
        if(error === "h4"){
            switch (order) {
                case "First":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'(x_{i})=[-f(x_{i+2})+8f(x_{i+1})-8f(x_{i-1})+f(x_{i-2})]}{12h}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'(${x})=[-f(${x}+${h}+${h})+8f(${x}+${h})-8f(${x}-${h})+f(${x}-${h}-${h})]}{12(${h})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'(x_{numerical}) - f'(x_{true})}{f'(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Second":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''(x_{i})=[-f(x_{i+2}) + 16f(x_{i+1}) - 30f(x_{i}) + 16f(x_{i-1}) -f(x_{i-2}) ]}{12h^{2}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''(${x})=[-f(${x}+${h}+${h}) + 16f(${x}+${h}) - 30f(${x}) + 16f(${x}-${h}) -f(${x}-${h}-${h}) ]}{12(${h}^{2})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''(x_{numerical}) - f''(x_{true})}{f''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Third":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f'''(x_{i})=[-f(x_{i+3}) +8f(x_{i+2}) - 13f(x_{i+1}) + 13f(x_{i-1}) -8f(x_{i-2}) +f(x_{i-3})]}{8h^{3}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f'''(${x})=[-f(${x}+${h}+${h}+${h}) +8f(${x}+${h}+${h}) - 13f(${x}+${h}) + 13f(${x}-${h}) -8f(${x}-${h}-${h}) +f(${x}-${h}-${h}-${h})]}{8(${h}^{3})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f'''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f'''(x_{numerical}) - f'''(x_{true})}{f'''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                case "Fourth":
                  return (
                    <div className="bg-slate-200 w-full h-[95%] pb-10 p-6 border rounded-lg text-4xl text-center">
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "\\frac{f''''(x_{i})=[-f(x_{i+3}) +12f(x_{i+2}) -39f(x_{i+1}) +56f(x_{i}) -39f(x_{i-1}) +12f(x_{i-2}) -f(x_{i-3})]}{6h^{4}}",
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `\\frac{f''''(${x})=[-f(${x}+${h}+${h}+${h}) +12f(${x}+${h}+${h}) -39f(${x}+${h}) +56f(${x}) -39f(${x}-${h}) +12f(${x}-${h}-${h}) -f(${x}-${h}-${h}-${h})]}{6(${h}^{4})}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `Exact Differentiation : f''''(${x}) = ${rDifff}`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{f''''(x_{numerical}) - f''''(x_{true})}{f''''(x_{numerical})} \\right| \\times 100\\%`,
                          { throwOnError: false }
                        ),
                      }} />
                      <div className="p-4" dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          `error = \\left|\\frac{${rResult} - ${rDifff}}{${rResult}} \\right| \\times 100\\% = ${rError}`,
                          { throwOnError: false }
                        ),
                      }} />
                    </div>
                  );
                default:
                  return null;
              }
        }
    }
  };

  return <>{renderContent()}</>;
};

export default SolutionRenderer;