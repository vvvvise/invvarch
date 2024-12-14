import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Career } from "../../../models/Career";
import { EducationInfo } from "../../../models/EducationInfo";
import { Individual } from "../../../models/Individual";
import { Post } from "../../../models/Post";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { User } from "../../../models/User";
import { UserCareerArgs } from "./args/UserCareerArgs";
import { UserEducationInfoArgs } from "./args/UserEducationInfoArgs";
import { UserIndividualArgs } from "./args/UserIndividualArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserProjectInfoArgs } from "./args/UserProjectInfoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Career, {
    nullable: true
  })
  async career(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserCareerArgs): Promise<Career | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).career({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Individual, {
    nullable: true
  })
  async individual(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserIndividualArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).individual({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EducationInfo, {
    nullable: true
  })
  async educationInfo(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).educationInfo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ProjectInfo], {
    nullable: false
  })
  async projectInfo(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserProjectInfoArgs): Promise<ProjectInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).projectInfo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
