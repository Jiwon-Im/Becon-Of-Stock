package com.ssafy.beconofstock.board.dto;

import com.ssafy.beconofstock.board.entity.Comment;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommentResponseDto {

    private Long commentId;
    private String userNickname;
    private String content;
    private Long likeNum;
    private Long commentNum;
//    private Long depth;
    private LocalDateTime createDateTime;
    private List<CommentResponseDto> children;

    public CommentResponseDto(Comment comment) {
        this.commentId = comment.getId();
        this.userNickname = comment.getMember().getNickname();
        this.content = comment.getContent();
        this.likeNum = comment.getLikeNum();
        this.commentNum = comment.getCommentNum();
        this.createDateTime = comment.getCreatedDateTime();
    }
    public CommentResponseDto(Comment comment, List<CommentResponseDto> children) {
        this.commentId = comment.getId();
        this.userNickname = comment.getMember().getNickname();
        this.content = comment.getContent();
        this.likeNum = comment.getLikeNum();
        this.commentNum = comment.getCommentNum();
        this.children = children;
        this.createDateTime = comment.getCreatedDateTime();
    }

}
