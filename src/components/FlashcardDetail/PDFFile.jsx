import React from "react";

import {
  Document,
  Page,
  StyleSheet,
  Text,
  Image,
  View,
} from "@react-pdf/renderer";

/* Styles of PDF File */

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  mainheading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#cc1313",
    textAlign: "left",
    textDecoration: "underline",
  },
  mainimage: {
    marginVertical: 15,
    marginLeft: 50,
    width: 300,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10,
    fontWeight: 400,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cc1313",
    textAlign: "left",
  },
  termsection: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  termsectionLeft: {
    flexBasis: "40%",
    padding: 10,
  },
  termHeading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    color: "#cc1313",
  },

  termsectionRight: {
    flexBasis: "60%",
    padding: 10,
  },
  termDesc: {
    fontSize: 14,
    textAlign: "justify",
    fontWeight: 400,
  },
});

/* Function of Create a PDF File and display the content of Flashcard on that file */
function PDFFile({ res, printpdf = false }, ref) {
  return (
    <Document ref={ref}>
      <Page style={styles.body} size={"A4"} id="printdoc">
        {!printpdf ? (
          <>
            <Text style={styles.mainheading}>
              {res?.group?.title.toString()}
            </Text>
            <Image style={styles.mainimage} src={res?.group?.image} alt="" />
            <Text style={styles.description}>{res?.group?.description}</Text>
            <Text style={styles.subheading}>
              {res?.group?.title.toString()} related terms
            </Text>
          </>
        ) : (
          <>
            <p style={styles.mainheading}>{res?.group?.title.toString()}</p>
            <img style={styles.mainimage} src={res?.group?.image} alt="" />
            <p style={styles.description}>{res?.group?.description}</p>
            <p style={styles.subheading}>
              {res?.group?.title.toString()} related terms
            </p>
          </>
        )}

        {res?.terms?.map((term, idx) =>
          !printpdf ? (
            <View style={styles.termsection} key={idx}>
              <View style={styles.termsectionLeft}>
                <Text style={styles.termHeading}>
                  {term?.termTitle?.toString()}
                </Text>
                <Image src={term?.termImage} alt="" />
              </View>
              <View style={styles.termsectionRight}>
                <Text style={styles.termDesc}>{term?.termDefinition}</Text>
              </View>
            </View>
          ) : (
            <div style={styles.termsection} key={idx}>
              <div style={styles.termsectionLeft}>
                <p style={styles.termHeading}>{term?.termTitle.toString()}</p>
                <img src={term?.termImage} alt="" />
              </div>
              <div style={styles.termsectionRight}>
                <p style={styles.termDesc}>{term?.termDefinition}</p>
              </div>
            </div>
          )
        )}

        <Text
        //render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </Page>
    </Document>
  );
}

export default React.forwardRef(PDFFile);
