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
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Results from "./Results";
import useNominationStore from "../../stores/useNominationStore";
import useDebounce from "../../hooks/useDebounce";
import findMovieByName from "../../api/findMovieByName";
import Nominations from "./Nominations";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { nominations } = useNominationStore();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isSuccess, isLoading, data, refetch } = useQuery(
    ["movie", debouncedSearchTerm.trim()],
    () => findMovieByName(debouncedSearchTerm.trim()),
    { enabled: false }
  );

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
          width={["100%", "50vw"]}
        >
          <Input
            _focus={{}}
            onChange={(e) => setSearchTerm(e.target.value)}
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
            padding={10}
            width="95vw"
          >
            {nominations.size >= 5 && (
              <Text fontSize="lg" align="center">
                Thank you for nominating five movies!
              </Text>
            )}
            <Tabs variant="enclosed">
              <TabList>
                <Tab _focus={{}}>
                  <Text fontSize="xl">Results</Text>
                </Tab>
                <Tab _focus={{}}>
                  <Text fontSize="xl">Nominations</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {isLoading && (
                    <Progress hasStripe isAnimated size="lg" isIndeterminate />
                  )}
                  {isSuccess && data?.Search?.length > 0 && (
                    <Results results={data.Search} />
                  )}
                  {isSuccess && data?.Search === undefined && (
                    <Text fontSize="lg" align="center">
                      No results
                    </Text>
                  )}
                  {debouncedSearchTerm.trim().length === 0 &&
                    nominations.size < 5 && (
                      <Text fontSize="lg" align="center">
                        Search for a movie to nominate
                      </Text>
                    )}
                </TabPanel>
                <TabPanel>
                  <Nominations />
                  {nominations.size < 1 && (
                    <Text fontSize="lg" align="center">
                      You haven&apos;t made any nominations yet
                    </Text>
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
