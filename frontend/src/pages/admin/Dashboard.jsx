import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ReactToPdf from "react-to-pdf";

import { useDispatch, useSelector } from "react-redux";
import { getAllPopupMessages } from "../../redux/slice/contentSclice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Dashboard = () => {
  const ref = React.createRef();
  const dispatch = useDispatch();
  const { loading, error, popupDatas } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(getAllPopupMessages());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div>Loading....</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }
  return (
    <>
      <Box sx={{
        marginBottom: "2rem"
      }}>
        <ReactToPdf
          targetRef={ref}
          filename="admin-data.pdf"
          x={0.5}
          y={0.5}
          scale={0.5}
        >
          {({ toPdf }) => (
            <Button
             variant="contained"
              onClick={toPdf}
            >
              Generate pdf
            </Button>
          )}
        </ReactToPdf>
      </Box>
      <motion.div
        className="text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <TableContainer component={Paper} ref={ref}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell  align="center">Name</TableCell>
                <TableCell align="right">Contact</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {popupDatas &&
                popupDatas?.map((data, index) => {
                  const { name, contact } = data;
                  return (
                    <TableRow key={data._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="right">{contact}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div className="border-b border-gray-200 shadow py-8">
          <table className="divide-y divide-gray-300 w-full" ref={ref}>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-2 text-md text-gray-900 cursor-pointer">
                  id
                </th>

                <th className="px-6 py-2 text-md text-gray-900 cursor-pointer">
                  Name
                </th>

                <th className="px-6 py-2 text-md text-gray-900 cursor-pointer">
                  Contact
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-300">
              {popupDatas &&
                popupDatas?.map((data, index) => {
                  const { name, contact } = data;
                  return (
                    <tr className="whitespace-nowrap" key={data._id}>
                      <th className="px-6 py-2 text-md text-gray-500 cursor-pointer">
                        {index + 1}
                      </th>

                      <th className="px-6 py-2 text-md text-gray-500 cursor-pointer">
                        {name}
                      </th>

                      <th className="px-6 py-2 text-md text-gray-500 cursor-pointer">
                        {contact}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div> */}
      </motion.div>
    </>
  );
};

export default Dashboard;
