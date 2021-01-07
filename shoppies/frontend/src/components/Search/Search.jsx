import {
  Box,
  Container,
  Flex,
  Input,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Results from "./Results";
import useNominationStore from "../../stores/useNominationStore";
import useDebounce from "../../hooks/useDebounce";
import findMovieByName from "../../api/findMovieByName";
import Nominations from "./Nominations";
import { StyledText } from "../Core/Text";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tabIndex, setTabIndex] = React.useState(0);
  const { nominations } = useNominationStore();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isSuccess, isLoading, data, refetch } = useQuery(
    ["movie", debouncedSearchTerm.trim()],
    () => findMovieByName(debouncedSearchTerm.trim()),
    { enabled: false }
  );

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleChange = (input) => {
    setSearchTerm(input.replace(/[^0-9a-z\s']/gi, ""));
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim().length > 0) {
      refetch();
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Container centerContent paddingBottom={["0.25in", "0.5in"]}>
        <Box
          borderWidth="2px"
          boxShadow="md"
          rounded="lg"
          width={["95vw", "30vw"]}
        >
          <Input
            _focus={{}}
            value={searchTerm}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search for a movie..."
            size="lg"
            variant="filled"
          />
        </Box>
      </Container>
      {(debouncedSearchTerm.trim().length > 0 || nominations.size > 0) && (
        <Flex justifyContent="center">
          <Box
            bg="#fdfdfd"
            borderRadius="15px"
            borderWidth="2px"
            minWidth={["0px", "750px"]}
            padding={10}
            width={["95vw", "47vw"]}
          >
            <StyledText fontSize="lg" align="center" paddingBottom="1rem">
              {nominations.size >= 5
                ? "Thank you for nominating five movies!"
                : `You have ${5 - nominations.size} nomination${
                    nominations.size === 4 ? "" : "s"
                  } left`}
            </StyledText>
            <Tabs
              colorScheme="navy"
              index={tabIndex}
              isFitted
              onChange={handleTabsChange}
              variant="enclosed"
            >
              <TabList>
                <Tab _focus={{}}>
                  <StyledText
                    fontSize="xl"
                    style={tabIndex === 0 ? { fontWeight: "bold" } : {}}
                  >
                    Results
                  </StyledText>
                </Tab>
                <Tab _focus={{}}>
                  <StyledText
                    fontSize="xl"
                    style={tabIndex === 1 ? { fontWeight: "bold" } : {}}
                  >
                    Nominations
                  </StyledText>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {isLoading && (
                    <Progress
                      colorScheme="green"
                      hasStripe
                      isAnimated
                      isIndeterminate
                      size="lg"
                    />
                  )}
                  <Flex justifyContent="center">
                    {isSuccess && data?.Search?.length > 0 && (
                      <Results results={data.Search} />
                    )}
                    {isSuccess && data?.Search === undefined && (
                      <StyledText fontSize="lg" align="center">
                        No results
                      </StyledText>
                    )}
                    {debouncedSearchTerm.trim().length === 0 &&
                      nominations.size < 5 && (
                        <StyledText fontSize="lg" align="center">
                          Search for a movie to nominate
                        </StyledText>
                      )}
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Nominations />
                  {nominations.size < 1 && (
                    <StyledText fontSize="lg" align="center">
                      You haven&apos;t made any nominations yet
                    </StyledText>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Search;
