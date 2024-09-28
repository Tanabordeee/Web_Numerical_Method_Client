// src/components/LinearAlgebra.js

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { isInteger, round } from "mathjs";
import Swal from "sweetalert2";
import Cramer from "../service/Cramer";
import GaussElimination from "../service/GaussElimination";
import GaussJordan from "../service/GaussJordan";
import LU_Decomposition from "../service/LU_Decomposition";
import MatrixInversion from "../service/MatrixInversion";
import Cholesky_Decomposition from "../service/Cholesky";
import ConjugateGradientMethod from "../service/ConjugateGradientMethod";
import MatrixInput from "./MatrixInput";
import MethodSelector from "./MethodSelector";
import CalculationButton from "./CalculationButton";
import SolutionDisplay from "./SolutionDisplay";
import SizeInput from "./SizeInput";
const LinearAlgebra = () => {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [matrixX, setMatrixX] = useState([]);
  const [method, setMethod] = useState("Cramer");
  const [answer, setAnswer] = useState({});
  const [answer2, setAnswer2] = useState([]);
  const [answerConjugate , setAnswerConjugate] = useState({});
  const [loading, setLoading] = useState(false);
  // Initialize matrices based on the size
  useEffect(() => {
    if (size > 0 && isInteger(size)) {
      const newMatrixA = Array.from({ length: size }, () =>
        Array(size).fill(0)
      );
      const newMatrixB = Array(size).fill(0);
      const newMatrixX = Array(size).fill(0);
      setMatrixA(newMatrixA);
      setMatrixB(newMatrixB);
      setMatrixX(newMatrixX);
      setAnswer({});
      setAnswer2([]);
      setAnswerConjugate({});
    } else {
      setMatrixA([]);
      setMatrixB([]);
      setAnswer({});
      setAnswer2([]);
    }
  }, [size]);
  // Calculation Functions
  const Cramer_Calculate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      const cramerResult = Cramer(matrixA, matrixB);
      setAnswer(cramerResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const GaussEliminations = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const gaussResult = GaussElimination(matrixA, matrixB);
      setAnswer(gaussResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const GaussJordans = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const gaussJordanResult = GaussJordan(matrixA, matrixB);
      setAnswer(gaussJordanResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const Lu_Decompositions = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const luResult = LU_Decomposition(matrixA, matrixB);
      setAnswer2(luResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const MatrixInversions = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const inversionResult = MatrixInversion(matrixA, matrixB);
      setAnswer(inversionResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const Cholseky = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const choleskyResult = Cholesky_Decomposition(matrixA, matrixB);
      setAnswer2(choleskyResult);
      setLoading(false);

      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Failed to calculate. Please try again.",
        icon: "error",
      });
    }
  };

  const ConjugateGradientMethods = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const conjugateResult = ConjugateGradientMethod(
        matrixA,
        matrixB,
        matrixX
      );
      setAnswerConjugate(conjugateResult);
      setLoading(false);
      Swal.fire({
        title: "Success",
        text: "Calculation successful!",
        icon: "success",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  };

  // Mapping methods to their corresponding calculation functions
  const methodCalculationMap = {
    Cramer: Cramer_Calculate,
    GaussElimination: GaussEliminations,
    GaussJordan: GaussJordans,
    MatrixInversion: MatrixInversions,
    LU_Decomposition: Lu_Decompositions,
    Cholesky_Decomposition: Cholseky,
    ConjugateGradientMethod: ConjugateGradientMethods,
    // Add other methods here if needed
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center my-4 items-center">
        {/* Size Input */}
        <SizeInput size={size} setSize={setSize} />

        {/* Method Selector */}
        <MethodSelector method={method} setMethod={setMethod} />

        {/* Calculation Button */}
        <CalculationButton
          method={method}
          handleCalculate={methodCalculationMap[method]}
        />

        {/* Matrix Inputs */}
        <MatrixInput
          size={size}
          matrixA={matrixA}
          setMatrixA={setMatrixA}
          matrixB={matrixB}
          setMatrixB={setMatrixB}
          matrixX={matrixX}
          setMatirX={setMatrixX}
          method={method}
        />

        {/* Solution Display */}
        <SolutionDisplay
          method={method}
          answer={answer}
          answer2={answer2}
          conjugateAnswer = {answerConjugate}
          loading={loading}
          size={size}
          matrixA = {matrixA}
          matrixB = {matrixB}
        />
      </div>
    </>
  );
};

export default LinearAlgebra;
