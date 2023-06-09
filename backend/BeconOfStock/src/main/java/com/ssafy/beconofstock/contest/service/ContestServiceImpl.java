package com.ssafy.beconofstock.contest.service;

import com.ssafy.beconofstock.contest.dto.ContestRequestDto;
import com.ssafy.beconofstock.contest.dto.ContestResponseDto;
import com.ssafy.beconofstock.contest.entity.Contest;
import com.ssafy.beconofstock.contest.repository.ContestRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContestServiceImpl implements ContestService {

    private final ContestRepository contestRepo;

    @Override
    public ContestResponseDto createContest(ContestRequestDto contestReq) {
        Contest contest = Contest.builder()
                .title(contestReq.getTitle())
                .description(contestReq.getDescription())
                .content(contestReq.getContent())
                .type(0L)
                .start_date_time(contestReq.getStart_date_time())
                .end_date_time(contestReq.getEnd_date_time())
                .build();
        return new ContestResponseDto(contestRepo.save(contest));
    }

    @Override
    public Page<ContestResponseDto> getContestAllList(Pageable pageable) {
        Page<Contest> contest = contestRepo.findAll(pageable);

        PageImpl<ContestResponseDto> result = new PageImpl<>(
                contest.stream().map(ContestResponseDto::new).collect(Collectors.toList()),
                pageable,
                contest.getTotalPages());
        return result;
    }

    @Override
    public Contest getContestDetail(Long contestId) {
        return contestRepo.findById(contestId).orElse(null);
    }

    @Override
    public void deleteContest(Long contestId) {
        contestRepo.deleteById(contestId);
    }

    @Override
    public ContestResponseDto typeUpdateContest(Long contestId) {
        Contest contest = contestRepo.findById(contestId).orElse(null);
        contest.setType(1L);
        return new ContestResponseDto(contestRepo.save(contest));
    }

    @Override
    public ContestResponseDto updateContest(Long contestId, ContestRequestDto contestReq) {
        Contest contest = contestRepo.findById(contestId).orElse(null);
        contest.setTitle(contestReq.getTitle());
        contest.setContent(contestReq.getContent());
        contest.setDescription(contestReq.getDescription());
        contest.setStart_date_time(contestReq.getStart_date_time());
        contest.setEnd_date_time(contestReq.getEnd_date_time());
        return new ContestResponseDto(contestRepo.save(contest));
    }


}
